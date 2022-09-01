package server.server.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.server.user.entity.User;
import server.server.exception.BusinessLogicException;
import server.server.exception.ExceptionCode;
import server.server.user.repository.UserRepository;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public ResponseEntity findUser(String userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        User findUser = optionalUser.orElseThrow(
                ()->new BusinessLogicException(ExceptionCode.USER_NOT_FOUND)
        );

        return new ResponseEntity(findUser, HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public User findVerifiedUser(String userId) {
        Optional<User> optionalMember =
                userRepository.findById(userId);
        User findUser =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        return findUser;
    }

    public void deleteUser(String userId) {
        User findUser = findVerifiedUser(userId);

        userRepository.delete(findUser);
    }

}
