package com.codestates.seb.calculator;

import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        //계산기 심화 기능 구현
        System.out.println("===Java Calculator===");

        Scanner input = new Scanner(System.in);
        /*
            요구 사항에 따라 간단한 계산기를 만들어주세요.
            1. 사용자의 입력으로 첫 번째 숫자, 연산자, 두 번째 숫자를 받아야 합니다.
            2. 연산자의 종류는 +, -, *, / 입니다.
            3. 소수점 연산을 수행할 수 있어야 합니다.
            4. 연산 결과를 콘솔에 출력합니다.
        */
        // TODO...

        System.out.println("숫자1을 입력하세요. : ");
        double num1 = Double.parseDouble(input.nextLine());

        double result = num1;

        while (true) {
            System.out.println("연산자를 입력하세요. : ");
            char operator = input.nextLine().charAt(0);

            if (operator == '+') {
                System.out.println("숫자2를 입력하세요. : ");
                double num2 = Double.parseDouble(input.nextLine());
                result += num2;
            }
            else if (operator == '-') {
                System.out.println("숫자2를 입력하세요. : ");
                double num2 = Double.parseDouble(input.nextLine());
                result -= num2;
            }
            else if (operator == '*') {
                System.out.println("숫자2를 입력하세요. : ");
                double num2 = Double.parseDouble(input.nextLine());
                result *= num2;
            }
            else if (operator == '/') {
                System.out.println("숫자2를 입력하세요. : ");
                double num2 = Double.parseDouble(input.nextLine());
                result /= num2;
            }
            else if (operator == '!') {
                System.out.println("종료");
                break;
            }
            else {
                System.out.println("연산자를 다시 입력하세요.(종료는 ! 입력) : ");
            }
            System.out.println("결과 : " + result);
        }
    }


//기본 구현 코드
//     System.out.println("===Java Calculator===");
//
//    Scanner input = new Scanner(System.in);
//        /*
//            요구 사항에 따라 간단한 계산기를 만들어주세요.
//            1. 사용자의 입력으로 첫 번째 숫자, 연산자, 두 번째 숫자를 받아야 합니다.
//            2. 연산자의 종류는 +, -, *, / 입니다.
//            3. 소수점 연산을 수행할 수 있어야 합니다.
//            4. 연산 결과를 콘솔에 출력합니다.
//        */
//    // TODO...
//        System.out.println("연산자, 첫 번째 숫자, 두 번째 숫자..!");
//    char operator = input.nextLine().charAt(0);
//    double firstNum = Double.parseDouble(input.nextLine());
//    double lastNum = Double.parseDouble(input.nextLine());
//
//        System.out.println("결과 : " + all(operator, firstNum, lastNum));
//}
//
//    static public double all(char mark, double num1, double num2) {
//        double result = 0.0;
//        switch (mark) {
//            case '+':
//                result = num1 + num2;
//                break;
//            case '-':
//                result = num1 - num2;
//                break;
//            case '*':
//                result = num1 * num2;
//                break;
//            case '/':
//                result = num1 / num2;
//                break;
//            default:
//                System.out.println("다시 입력해주세요..!");
//                break;
//        }
//        return result;
}
