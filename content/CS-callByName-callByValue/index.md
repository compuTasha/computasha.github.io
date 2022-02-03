---
emoji: 💬
title: 'Call by Value, Call by Name - Kotlin'
date: '2022-02-02 23:29:00'
author: 콤퓨타샤
tags: Kotlin computasha 
categories: CS
---


## 1️⃣ Call by Value (값에 의한 호출)
```kotlin
fun main() {
    val result = callByValue(lambda()) // 람다식 함수를 호출
    println(result)
}

fun callByValue(b: Boolean): Boolean { // 일반 변수 자료형으로 선언된 매개변수
    println("callByValue function")
    return b
}

val lambda: () -> Boolean = {  
    println("lambda function")
    true 		    
}

```
<br>
Call by Value 방법을 사용하면 매개변수로 람다식 함수를 바로 호출하니까, lambda 함수에서 반환값을 받아온 후에 callByValue 함수 블록으로 넘어간다. 그 경우 반환값은 일반 Boolean 자료형이다.  
    
<br><br>

## 2️⃣ Call by Name (이름에 의한 호출)
```kotlin
fun main() {
    val result = callByName(otherLambda) // 람다식 이름으로 호출
    println(result)
}

fun callByName(b: () -> Boolean): Boolean { // 람다식 함수 자료형으로 선언된 매개변수
    println("callByName function")
    return b()
}

val otherLambda: () -> Boolean = {
    println("otherLambda function")
    true
}

```
<br>
Call by Name 방법을 사용하면, 매개변수로 함수 이름만 사용하니까 람다식 자체가 callByName 함수 매개변수에 복사되고(함수호출 X), 그 경우 매개변수의 자료형은 람다식 함수 자료형이다. 이는 callByName 함수 내에서 return 시 b()를 통해 otherLambda를 호출하고 값을 반환한다.  
    
<br><br>

## → 그래서 이걸 어디에 쓰나요??

(예시)

리소스도 많이 들고 시간도 오래 걸리는 복잡한 연산을 하는 메소드 A가 있다.

이 메소드 A는 특정 조건이 true인 경우에 쓰이는 메소드이다.

이 메소드 A를 앞서 살펴본 1️⃣ callByValue 형식으로 호출하면 조건에 상관없이 무조건 호출되는 반면에,

**2️⃣ callByName으로 호출할 시, 원하는 조건일때만 실행되도록 할 수 있다.**    

<br>

참고 링크 :  
[Call by Value, Call by Name - kotlin (gitbook.io)](https://gold.gitbook.io/kotlin/call-by-value-call-by-name)

<br><br>

```toc

```
