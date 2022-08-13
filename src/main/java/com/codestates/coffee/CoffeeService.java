package com.codestates.coffee;

// TODO CoffeeService 에 Spring WebFlux 를 적용해 주세요. Spring MVC 방식 아닙니다!!

import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.utils.CustomBeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Mono;

@Transactional
@Service
public class CoffeeService {

    private final CoffeeRepository coffeeRepository;
    private final CustomBeanUtils<Coffee> beanUtils;

    public CoffeeService(CoffeeRepository coffeeRepository,
                         CustomBeanUtils<Coffee> beanUtils) {
        this.coffeeRepository = coffeeRepository;
        this.beanUtils = beanUtils;
    }

    public Mono<Coffee> createCoffee(Coffee coffee){
        return verifyExistCode(coffee.getCoffeeCode())
                .then(coffeeRepository.save(coffee));
    }

    private Mono<Coffee> verifyExistCode(String name){
        return coffeeRepository.findByCode(name)
                .flatMap(findCoffee -> {
                    if(findCoffee != null){
                        return Mono.error(new BusinessLogicException(ExceptionCode.COFFEE_CODE_EXISTS));
                    }
                    return Mono.empty();
                });
    }

}
