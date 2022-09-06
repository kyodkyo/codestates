package server.server.member.controller;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;

import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import server.server.config.auth.PrincipalDetails;
import server.server.config.oauth.PrincipalOauth2UserService;
import server.server.user.entity.User;
import server.server.user.repository.UserRepository;


@Controller
@RequiredArgsConstructor
public class IndexController {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private final UserRepository userRepository;

    private final PrincipalOauth2UserService principalOauth2UserService;

    @PostMapping ("/callback")
    public ResponseEntity loginUser(@RequestBody OAuth2UserRequest oAuth2UserRequest){

        OAuth2User user = principalOauth2UserService.loadUser(oAuth2UserRequest);

        return new ResponseEntity(user.getAttributes(), HttpStatus.OK);
    }


    @GetMapping("/")
    public String index(@AuthenticationPrincipal PrincipalDetails principalDetails, Model model) {

        try {
            if(principalDetails.getUsername() != null) {
                model.addAttribute("username", principalDetails.getUsername());
            }
        } catch (NullPointerException e) {

        }
        return "index";
    }

    @GetMapping("/user")
    public @ResponseBody String user(@AuthenticationPrincipal PrincipalDetails principalDetails) {

        System.out.println(principalDetails.getUser());

        return "user";
    }

//    @GetMapping("/admin")
//    public @ResponseBody String admin() {
//        return "admin";
//    }
//
//    @GetMapping("/manager")
//    public @ResponseBody String manager() {
//        return "manager";
//    }

    @GetMapping("/login")
    public String login() {
        return "loginForm";
    }

    @GetMapping("/join")
    public String join() {
        return "joinForm";
    }

    @PostMapping("/join")

    public String join(User user) {
        user.setRole("ROLE_USER");
        String rawPassword = user.getUserPw();
        String encPassword = bCryptPasswordEncoder.encode(rawPassword);
        user.setUserPw(encPassword);

        userRepository.save(user);

        return "redirect:/login";
    }

    @Secured("ROLE_ADMIN")
    @GetMapping("/info")
    public @ResponseBody String info() {
        return "info";
    }

    @GetMapping("/loginTest")
    public @ResponseBody String loginTest(Authentication authentication) {
        System.out.println("============/loginTest===========");
        PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
        System.out.println("authentication : " + principalDetails.getUser());

        return "세션 정보 확인";
    }

    @GetMapping("/loginTest2")
    public @ResponseBody String loginTest2(@AuthenticationPrincipal PrincipalDetails principalDetails) {
        System.out.println("============/loginTest2===========");
        System.out.println("userDetails : " + principalDetails.getUser());

        return "세션 정보 확인2";
    }

    @GetMapping("/loginTest3")
    public @ResponseBody String loginOAuthTest(
            Authentication authentication,
            @AuthenticationPrincipal OAuth2User oauth) {
        System.out.println("============/loginOAuthTest===========");
        OAuth2User oauth2User = (OAuth2User) authentication.getPrincipal();
        System.out.println("authenticaion : " + oauth2User.getAttributes());
        System.out.println("oauth2User : " + oauth.getAttributes());
        return "세션 정보 확인3";
    }
}

