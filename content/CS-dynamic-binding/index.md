---
emoji: ⛓️
title: '정적/동적 바인딩, 정적/동적 타입'
date: '2022-02-16 23:38:00'
author: 콤퓨타샤
tags: OOP computasha
categories: CS
---

## ⛓️ 바인딩이란?
함수를 컴파일하면, 선언된 함수의 코드는 메모리에 저장되고 함수 호출문에는 코드의 메모리 주소값이 저장된다.  

여기서 프로그램을 실행하면 함수 호출문에서 함수 코드가 저장된 주소로 이동한 후 함수를 실행하고 원래 위치로 돌아오게 된다.  

이때 함수 호출문에서 함수 코드가 저장된 주소로 **연결**하는 과정을 바인딩이라고 한다.

<br>

## 🏃🏻 동적 바인딩

`동적 바인딩`의 경우,  컴파일 과정에서는 부모 클래스의 함수를 참조하지만 **런타임 과정에서 실제로는 자식 클래스의 함수와 바인딩된다.**

### 왜?

`정적 바인딩`의 경우, 컴파일 과정에서 정의된 타입 형식을 참조해서 어떤 클래스와 메소드를 참조할지 결정하는데(=super class의 메소드)  
`동적 바인딩`의 경우에는 런타임에 실제 객체를 찾으니까 오버라이드된 자식 클래스의 메소드의 결과가 출력된다. 

→ **다형성(Polymorphism)**을 잘 보여준다

(컴파일러는 static method에 대해 실제 객체를 찾는 작업을 하지 않음)

<br>

- 대부분의 객체 지향 언어가 `동적 바인딩`을 지원한다<details><summary>물론 예외도 있음</summary>![에이다](/Ada.png)</details>  

<br>

필요에 따라 정적 바인딩과 동적 바인딩을 섞어서 쓰는 것 같다.
        
<br>
        
### 정적/동적 타입과 정적/동적 바인딩은 다른 개념
정적 타입의 언어는 컴파일 시 변수의 타입이 결정되고, 동적 타입의 언어는 런타임 시 변수의 타입이 결정된다.

[정적타입 vs 동적타입 (Static type.. : 네이버블로그 (naver.com)](https://blog.naver.com/tor012/222202064976)  


→ 동적 언어는 동적 타입을 지원하는 언어를 뜻함  
    (e.g. 코틀린은 정적 언어. 따라서 컴파일 시점에 모든 객체나 메서드의 타입을 알 수 있다. 파이썬은 동적 언어. 따라서 런타임에 타입이 결정되고 이 때문에 정수형으로 선언된 변수가 문자형으로도 저장될 수 있다.)

<br>

### 동적 언어의 강타입언어와 약타입언어
![강타입,약타입](/Untitled.png)
    
[https://redthing.tistory.com/entry/정적-타입-언어-동적-타입-언어-Python](https://redthing.tistory.com/entry/%EC%A0%95%EC%A0%81-%ED%83%80%EC%9E%85-%EC%96%B8%EC%96%B4-%EB%8F%99%EC%A0%81-%ED%83%80%EC%9E%85-%EC%96%B8%EC%96%B4-Python)  

<br>

아우 어렵다..!
    
<br>

<details>
<summary>참고 링크</summary>

[정적 바인딩(Static binding) vs. 동적 바인딩(Dynamic binding)](https://secretroute.tistory.com/entry/140819)

[다형성과 동적 바인딩](https://brunch.co.kr/@mystoryg/60)

[[Java] 동적바인딩 vs 정적바인딩](https://woovictory.github.io/2020/07/05/Java-binding/)

[C++ 정적 바인딩, 동적 바인딩](https://leemoney93.tistory.com/63)

</details>




<br><br>


```toc

```