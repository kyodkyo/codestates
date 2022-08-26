package server.server.user.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.server.user.entity.User;
import server.server.user.exception.BusinessLogicException;
import server.server.user.exception.ExceptionCode;
import server.server.user.repository.UserRepository;

import java.util.Optional;

@Service
@Transactional
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void deleteUser(long userId) {
        User findUser = findVerifiedUser(userId);

        userRepository.delete(findUser);
    }

    @Transactional(readOnly = true)
    public User findVerifiedUser(long memberId) {
        Optional<User> optionalMember =
                userRepository.findById(memberId);
        User findUser =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findUser;
    }

    public User findUser(long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        User findUser = optionalUser.orElseThrow(()->new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findUser;
    }
}
