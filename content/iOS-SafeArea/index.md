---
emoji: ๐ฑ
title: 'Safe Area์ ignoresSafeArea() ์ดํดํ๊ธฐ - SwiftUI'
date: '2022-04-08 22:56:00'
author: ์ฝคํจํ์ค
tags: iOS SwiftUI computasha
categories: iOS
---


## โ Safe Area

![SafeArea](/preview.png)  
<br>
๊ทธ๋ฆผ์ ๋ณด์ด๋ ์์ญ์ด Safe Area์ ํด๋นํ๋ค. ๊ธฐ๋ณธ์ ์ผ๋ก SwiftUI์์๋ ๋ทฐ๋ฅผ Safe Area ์์๋ง ๋ฐฐ์นํ๋ค.

<br>

## โ๏ธ ignoresSafeArea()
= Safe Area ๋ฐ๊น์ง ๋ทฐ๋ฅผ ํ์ฅํจ (Expands the view out of its safe area)  

![ignoresSafeArea](/ignoressafearea.png)  

<br>

```swift
// #1

struct HomeView: View {
    var body: some View {
        ZStack {
            Color.blue
        }
    }
}
```

```swift
// #2

struct HomeView: View {
    var body: some View {
        ZStack {
            Color.blue
                .ignoresSafeArea() // safe area ๋ฌด์
        }
    }
}
```  
<br>
๋ค์ ์์๋ฅผ ๋ณด๋ฉด Zstack ๋ทฐ๋ฅผ body์ ์์นํ๊ณ  ๋ฐฐ๊ฒฝ์์ผ๋ก ํ๋์์ ์ค์ ํ๊ณ  ์๋ค.  
<br><br>
ignoresSafeArea()๊ฐ ์๋ ๊ฒฝ์ฐ safe area์๋ง ํ๋์ ๋ฐฐ๊ฒฝ์ด ์ ์ฉ๋์ง๋ง, .ignoresSafeArea()๋ฅผ ์ฌ์ฉํ๋ฉด safe area ๋ฐ์ ์์ญ๊น์ง ํ๋์ ๋ฐฐ๊ฒฝ์ด ์ ์ฉ๋๋ ๊ฒ์ ํ์ธํ  ์ ์๋ค.

<br><br>

[์ ํ ๊ณต์๋ฌธ์ : ignoresSafeArea(_:edges:)](https://developer.apple.com/documentation/swiftui/image/ignoressafearea(_:edges:)/)


<br><br>


```toc

```