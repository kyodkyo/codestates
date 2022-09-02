package server.server.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.server.exception.BusinessLogicException;
import server.server.exception.ExceptionCode;
import server.server.user.dto.UserRequestDto;
import server.server.user.entity.User;
import server.server.user.repository.UserRepository;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;


    public String signUp(UserRequestDto requestDto) {
        userRepository.save(User.builder()
                .userId(requestDto.getUserId())
                .userPw(requestDto.getUserPw())
                .email(requestDto.getEmail())
                .build());

        return "SUCCESS";
    }


    public String login(String email, String userPw) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.get().getUserPw().equals(userPw)) {
            return "SUCCESS";
        }

        return "FAILED";
    }


    public ResponseEntity findUser(String userId) {
        Optional<User> optionalUser = userRepository.findByUserId(userId);

        User findUser = optionalUser.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND)
        );

        return new ResponseEntity(findUser, HttpStatus.OK);
    }


    @Transactional(readOnly = true)
    public User findVerifiedUser(String userId) {
        Optional<User> optionalMember = userRepository.findByUserId(userId);

        User findUser = optionalMember.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return findUser;
    }


    public String deleteUser(String userId, String userPw) {
        User findUser = findVerifiedUser(userId);

        if (findUser.getUserPw().equals(userPw)) {
            userRepository.delete(findUser);
            return "SUCCESS";
        }

        return "FAILED";
    }

    public boolean checkEmailDuplicate(String email) {
        return userRepository.existsByEmail(email);
    }

}
