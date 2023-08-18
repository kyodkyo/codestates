package com.codestates.homework;

import com.codestates.helper.StampCalculator;
import com.codestates.order.entity.Order;
import com.codestates.order.entity.OrderCoffee;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class StampCalculatorTest {
    @Test
    @DisplayName("실습1: 스탬프 카운트 계산 단위 테스트")
    public void calculateStampCountTest() {
        // TODO 여기에 테스트 케이스를 작성해주세요.
        // given
        int nowCount = 5;
        int earned = 3;

        // when
        int actual = StampCalculator.calculateStampCount(5, 3);

        int expected = 7;

        // then
        System.out.println(expected == actual);
    }

    @Test
    @DisplayName("실습1: 주문 후 누적 스탬프 카운트 계산 탄위 테스트")
    public void calculateEarnedStampCountTest(){
        // TODO 여기에 테스트 케이스를 작성해주세요.
        //given
        Order order = new Order();
        OrderCoffee orderCoffee1 = new OrderCoffee();
        orderCoffee1.setQuantity(2);
        OrderCoffee orderCoffee2 = new OrderCoffee();
        orderCoffee2.setQuantity(1);
        OrderCoffee orderCoffee3 = new OrderCoffee();
        orderCoffee3.setQuantity(3);

        List<OrderCoffee> orderCoffees = List.of(orderCoffee1, orderCoffee2, orderCoffee3);
        order.setOrderCoffees(orderCoffees);

        //when
        int actual = StampCalculator.calculateEarnedStampCount(order);
        int expected = 6;

        assertEquals(actual, expected);

    }
}