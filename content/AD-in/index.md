---
emoji: ๐ฌ
title: '.. operator ๋ฒ์ - Kotlin'
date: '2022-02-05 23:49:00'
author: ์ฝคํจํ์ค
tags: Kotlin computasha 
categories: Android
---

์ฝ์ธ๋ผ [Kotlin for Java Developers](https://www.coursera.org/learn/kotlin-for-java-developers?) ๊ฐ์์ ๋ฑ์ฅํ ๋ฌธ์   


### Q. 3๋ฒ์งธ ์์๊ฐ ์ true์ผ๊น.. 

![๋ฌธ์ ](/in-question.png)  

### A. ์ฌ์  ์์ผ๋ก Java๋ Scala ์ฌ์ด์ ์์ด์ true  

**(..) operator**๋ range๋ฅผ ๋ค๋ฃฐ ์ ์๋ ๊ฐ์ฅ ๊ฐ๋จํ ๋ฐฉ๋ฒ์ด๋ค. ์์๊ณผ ๋ ๊ฐ์ ๋ชจ๋ ํฌํจํ๋ ๋ฒ์๋ฅผ ๋ง๋ ๋ค.  
rangeTo() ํจ์์ operator form ์ด๊ณ , (..) operator๋ฅผ ์ฌ์ฉํ์ฌ **๋ฌธ์**๋ฟ๋ง ์๋๋ผ ์ ์์ ๋ํ ๋ฒ์๋ฅผ ๋ง๋ค ์ ์๋ค.

<br>

### Q. ๊ทธ๋ผ ํ๊ธ๋ ๋ ๊น์?  

```kotlin
println("์ฌ๊ณผ" in "๊ณ ๊ธฐ".."ํ์ฝ") // true

println("์ฌ๊ณผ" in "๊ณ ๊ธฐ".."๋๋") // false

```

### A. ๋ฉ๋๋ค!

<br><br>

\+ ํท๊ฐ๋ฆฌ์ง ๋ง์๋ค
### 

```kotlin
println("Kotlin" in "Java".."Scala") // true, ์ฌ์  ์์ผ๋ก ํ์ ๋ ์ฌ์ด์ ์์

println("Kotlin" in setOf("Java", "Scala")) // false, ์งํฉ์ Kotlin์ด ์์

```

<br><br>