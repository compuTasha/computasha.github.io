---
emoji: π¬
title: 'Call by Value, Call by Name - Kotlin'
date: '2022-02-02 23:29:00'
author: μ½€ν¨νμ€
tags: Kotlin computasha 
categories: Android
---


## 1οΈβ£ Call by Value (κ°μ μν νΈμΆ)
```kotlin
fun main() {
    val result = callByValue(lambda()) // λλ€μ ν¨μλ₯Ό νΈμΆ
    println(result)
}

fun callByValue(b: Boolean): Boolean { // μΌλ° λ³μ μλ£νμΌλ‘ μ μΈλ λ§€κ°λ³μ
    println("callByValue function")
    return b
}

val lambda: () -> Boolean = {  
    println("lambda function")
    true 		    
}

```
<br>
Call by Value λ°©λ²μ μ¬μ©νλ©΄ λ§€κ°λ³μλ‘ λλ€μ ν¨μλ₯Ό λ°λ‘ νΈμΆνλκΉ, lambda ν¨μμμ λ°νκ°μ λ°μμ¨ νμ callByValue ν¨μ λΈλ‘μΌλ‘ λμ΄κ°λ€. κ·Έ κ²½μ° λ°νκ°μ μΌλ° Boolean μλ£νμ΄λ€.  
    
<br><br>

## 2οΈβ£ Call by Name (μ΄λ¦μ μν νΈμΆ)
```kotlin
fun main() {
    val result = callByName(otherLambda) // λλ€μ μ΄λ¦μΌλ‘ νΈμΆ
    println(result)
}

fun callByName(b: () -> Boolean): Boolean { // λλ€μ ν¨μ μλ£νμΌλ‘ μ μΈλ λ§€κ°λ³μ
    println("callByName function")
    return b()
}

val otherLambda: () -> Boolean = {
    println("otherLambda function")
    true
}

```
<br>
Call by Name λ°©λ²μ μ¬μ©νλ©΄, λ§€κ°λ³μλ‘ ν¨μ μ΄λ¦λ§ μ¬μ©νλκΉ λλ€μ μμ²΄κ° callByName ν¨μ λ§€κ°λ³μμ λ³΅μ¬λκ³ (ν¨μνΈμΆ X), κ·Έ κ²½μ° λ§€κ°λ³μμ μλ£νμ λλ€μ ν¨μ μλ£νμ΄λ€. μ΄λ callByName ν¨μ λ΄μμ return μ b()λ₯Ό ν΅ν΄ otherLambdaλ₯Ό νΈμΆνκ³  κ°μ λ°ννλ€.  
    
<br><br>

## β κ·Έλμ μ΄κ±Έ μ΄λμ μ°λμ??

(μμ)

λ¦¬μμ€λ λ§μ΄ λ€κ³  μκ°λ μ€λ κ±Έλ¦¬λ λ³΅μ‘ν μ°μ°μ νλ λ©μλ Aκ° μλ€.

μ΄ λ©μλ Aλ νΉμ  μ‘°κ±΄μ΄ trueμΈ κ²½μ°μ μ°μ΄λ λ©μλμ΄λ€.

μ΄ λ©μλ Aλ₯Ό μμ μ΄ν΄λ³Έ 1οΈβ£ callByValue νμμΌλ‘ νΈμΆνλ©΄ μ‘°κ±΄μ μκ΄μμ΄ λ¬΄μ‘°κ±΄ νΈμΆλλ λ°λ©΄μ,

**2οΈβ£ callByNameμΌλ‘ νΈμΆν  μ, μνλ μ‘°κ±΄μΌλλ§ μ€νλλλ‘ ν  μ μλ€.**    

<br>

μ°Έκ³  λ§ν¬ :  
[Call by Value, Call by Name - kotlin (gitbook.io)](https://gold.gitbook.io/kotlin/call-by-value-call-by-name)

<br><br>

```toc

```
