---
emoji: 💬
title: '.. operator 범위 - Kotlin'
date: '2022-02-05 23:49:00'
author: 콤퓨타샤
tags: Kotlin computasha 
categories: Android
---

코세라 [Kotlin for Java Developers](https://www.coursera.org/learn/kotlin-for-java-developers?) 강의에 등장한 문제  


### Q. 3번째 예시가 왜 true일까.. 

![문제](/in-question.png)  

### A. 사전 순으로 Java랑 Scala 사이에 있어서 true  

**(..) operator**는 range를 다룰 수 있는 가장 간단한 방법이다. 시작과 끝 값을 모두 포함하는 범위를 만든다.  
rangeTo() 함수의 operator form 이고, (..) operator를 사용하여 **문자**뿐만 아니라 정수에 대한 범위를 만들 수 있다.

<br>

### Q. 그럼 한글도 될까요?  

```kotlin
println("사과" in "고기".."한약") // true

println("사과" in "고기", "더덕") // false

```

### A. 됩니다!

<br><br>

\+ 헷갈리지 맙시다
### 

```kotlin
println("Kotlin" in "Java".."Scala") // true, 사전 순으로 했을 때 사이에 있음

println("Kotlin" in setOf("Java", "Scala")) // false, 집합에 Kotlin이 없음

```

<br><br>