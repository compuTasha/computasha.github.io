---
emoji: 📱
title: 'MVC 디자인 패턴'
date: '2022-01-24 22:56:00'
author: 콤퓨타샤
tags: iOS MVC design-pattern Cocoa Cocoa-Touch computasha
categories: iOS
---

**디자인 패턴**은 특정한 상황에서 반복적으로 일어나는 일반적인 문제를 해결하기 위한 일종의 템플릿이다.

디자인 패턴을 잘 활용하면, 앱의 코드를 모듈화할 수 있고  버그 수정과 변경이 더 쉬워진다.

그중에서도 오늘 살펴볼 디자인 패턴은 MVC 패턴이다.

(오리지널 MVC 패턴이 아닌 [애플이 발표한 Cocoa MVC 패턴](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/MVC.html)..! = 요즘 말하는 MVC 패턴)

<br>

## 🤳🏻 Model-View-Controller (MVC)

현재 Cocoa Touch 개발에서 가장 많이 사용되는 디자인 패턴이다.

이 디자인 패턴은 앱 내의 모든 오브젝트가 **Model, View, Controller** 중 하나의 역할을 맡아 수행하도록 한다.

그리고 이렇게 같은 역할을 하는 오브젝트들을 모아서 **레이어**라고 부른다.

<br>

## 👪 MVC 레이어의 역할과 관계

우선 각 레이어의 역할을 살펴보자

다음은 레이어 간의 상호 작용을 보여주는 다이어그램이다.

![MVC pattern](/MVC.png)

MVC 디자인 패턴은 코드를 **Model, View, Controller** 중 하나로 구분한다. 

<br>

### 💁🏻‍♂️ Model : 데이터와 관련된 책임을 담당하는 레이어

Model 레이어에서는 앱이 포함해야할 데이터를 캡슐화하고 데이터를 처리하는 로직을 정의한다. 

그 외에 데이터가 사용자에게 어떻게 보여지는지, 데이터를 누가 사용하고 무엇을 사용하는지 등의 일에 대해서는 책임이 없다.

Model 레이어에서 변경 사항이 생기는 경우, 그 내용을 Controller에 전달하고 다시 Controller는 View를 업데이트해서 화면에 변경 사항을 반영한다.

<br>

### 💁🏻 View : 사용자에게 보여질 인터페이스를 담당하는 레이어

View 레이어에서는 사용자에게 앱의 데이터를 보여주고 상호 작용하는 방식을 정의한다. 

이때 데이터는 Controller에 의해 View 레이어에 전달된다.

View 레이어에서 사용자의 액션에 의해 생긴 변화는 Controller를 통해 Model에 전달된다.

<br>

### 💁🏻‍♀️ Controller : Model 과 View를 연결해주는 레이어

Controller 레이어는 Model에서 데이터를 가져온 다음 사용자에게 표시할 View로 이를 전달한다.

그리고 앱의 사용자로부터 받은 입력에 대한 응답으로, 모델 및 뷰를 업데이트하는 역할을 수행한다. 

<br>


> 💡 Model과 View 레이어는 Controller 레이어의 중재 하에 **서로의 존재를 몰라야 한다.** 
> View와 Model이 직접 소통하는 경우 유지보수가 어려워진다.

<br>

> 💡 한 가지 레이어에 너무 많은 역할이 편중되는 경우 디자인 패턴을 사용하는 이유가 사라지고 코드를 유지하기 어려워진다. 특히 Model과 View 사이의 유일한 레이어인 Controller가 비대해지는 경우가 많은데 이를 두고 “Massive-View-Controller” 라고 부르기도 한다. 이런 단점을 보완하기 위해 MVVM 디자인 패턴이 있는데.. 이건 다음 포스트에..!

<br>

**참고 링크**

[공식 문서](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/MVC.html)

[Design Patterns for Cocoa: MVC and MVVM](https://code.tutsplus.com/articles/cocoa-architectural-patterns-mvc-and-mvvm--cms-30265)

<br><br>

```toc

```
