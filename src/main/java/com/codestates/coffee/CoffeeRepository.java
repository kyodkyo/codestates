package com.codestates.coffee;

import org.springframework.data.r2dbc.repository.R2dbcRepository;
import reactor.core.publisher.Mono;

public interface CoffeeRepository extends R2dbcRepository<Coffee, Long> {

    Mono<Coffee> findByCode(String name);

}
