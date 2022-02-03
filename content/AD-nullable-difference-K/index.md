---
emoji: 💬
title: '()→Int? 와 (()→Int)? 차이점 - Kotlin'
date: '2022-02-03 23:49:00'
author: 콤퓨타샤
tags: Kotlin computasha 
categories: Android
---

### 코세라 [Kotlin for Java Developers](https://www.coursera.org/learn/kotlin-for-java-developers?) 강의에 등장한 문제

다음 보기 4개 중에서 컴파일되지 않는 것은? : 1번, 4번

![문제](/nullable-question.png)
<div style="text-align:center"><span style="color:gray;">{ } 은 반환 타입을 명시한다는.. 의미.. 였따..</span></div>

<br><br>

~~변수 f1은 반환 타입을 묻는데 null을 대입하고 있고, 변수 f4는 반환 값을 대입해야 하는데 반환 타입을 알려줌 (??)~~

<div style="text-align:center"><span style="color:navy;">→ 함수 타입 변수 f3은 함수 대신 null로 초기화하고, 함수 타입 변수 f2는 변수를 선언하고 바로 함수를 정의함 (함수 타입 변수 자체가 널이 될 수 있는 타입 VS 반환 타입이 널이 될 수 있는 타입)</span></div>

<br>

f3은 함수 대신 null로 초기화되어있기 때문에 나중에 함수 내에서 람다식을 저장하여 사용

<br>


> 💡 (파라미터) → 반환값  : 함수 표현식

<br>

<details>
<summary>참고 링크</summary>

[[Kotlin] 코틀린 고차 함수](https://taehyungk.github.io/posts/android-kotlin-high-order-function/)  
[[Kotlin 강좌] 21. 고차 함수와 람다의 활용 : 네이버 블로그 (naver.com)](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=yuyyulee&logNo=221388063341)

</details>

<br><br>
