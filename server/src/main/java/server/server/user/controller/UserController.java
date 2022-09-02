package server.server.user.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.server.user.dto.UserRequestDto;
import server.server.user.entity.User;
import server.server.user.service.UserService;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService userService;


    @PostMapping("/signUp")
    public ResponseEntity signUp(@RequestBody UserRequestDto requestDto) {
        boolean check = userService.checkUserIdDuplicate(requestDto.getUserId());

        if (!check) {
            if (userService.signUp(requestDto).equals("SUCCESS")) {
                return new ResponseEntity(HttpStatus.CREATED);
            }
        }

        return new ResponseEntity(HttpStatus.BAD_REQUEST);
    }

//      throw new BusinessLogicException(ExceptionCode.USER_EXISTS);

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody UserRequestDto requestDto) {
        if (userService.login(requestDto.getEmail(), requestDto.getUserPw()).equals("SUCCESS")) {
            return new ResponseEntity(HttpStatus.OK);
        }

        return new ResponseEntity(HttpStatus.BAD_REQUEST);
    }


    @GetMapping("/find")
    public ResponseEntity findUser(@RequestParam String userId) {
        User user = userService.findVerifiedUser(userId);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }


    @DeleteMapping("/delete")
    public ResponseEntity deleteMember(@RequestParam String userId, String userPw) {
        if(userService.deleteUser(userId, userPw).equals("SUCCESS")){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

}
