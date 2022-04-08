---
emoji: 📱
title: '[SwiftUI] Safe area와 ignoresSafeArea() 이해하기'
date: '2022-04-08 22:56:00'
author: 콤퓨타샤
tags: iOS SwiftUI computasha
categories: iOS
---


## ✅ Safe area

![Safe area](/safearea.png)  
<br>
그림에 보이는 영역이 Safe area에 해당한다. 기본적으로 SwiftUI에서는 뷰를 Safe area 안에만 배치한다.

<br>

## ↕️ ignoresSafeArea()
= safe area 밖까지 뷰를 확장함 (Expands the view out of its safe area)  

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
                .ignoresSafeArea() // safe area 무시
        }
    }
}
```  
<br>
다음 예시를 보면 Zstack 뷰를 body에 위치하고 배경색으로 파랑색을 설정하고 있다.  
<br><br>
ignoresSafeArea()가 없는 경우 safe area에만 파란색 배경이 적용되지만, .ignoresSafeArea()를 사용하면 safe area 밖의 영역까지 파란색 배경이 적용되는 것을 확인할 수 있다.

<br><br>

[애플 공식문서 : ignoresSafeArea(_:edges:)](https://developer.apple.com/documentation/swiftui/image/ignoressafearea(_:edges:)/)


<br><br>


```toc

```