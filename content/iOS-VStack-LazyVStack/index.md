---
emoji: ๐ฑ
title: 'VStack๊ณผ LazyVStack์ ์ธ์  ์ฌ์ฉํ์ง? - SwiftUI'
date: '2022-04-09 22:56:00'
author: ์ฝคํจํ์ค
tags: iOS SwiftUI computasha
categories: iOS
---


## ๐ฅ VStack

child ๋ทฐ๋ฅผ ์์ง์ผ๋ก ์ ๋ ฌํ๋ ๋ทฐ

![VStack](/vstack.png)

- `Vstack`์ ํ๋ฉด ์์ ๋ณด์ด๋ ์ ๋ณด์ด๋ child ๋ทฐ๋ฅผ ์ ๋ถ ๋ก๋ํ๋ค. **child ๋ทฐ ์๊ฐ ์ ๊ณ  ๋ ๋๋ง์ด ๋๋ ์ด ๋๋ฉด ์ ๋๋ ์ํฉ์๋ `Vstack`์ ์ฌ์ฉํ์** 

- ์์ : ํ์คํธ ๋ทฐ 10๊ฐ๋ฅผ ํฌํจํ VStack

<br>

```swift
var body: some View {
    VStack(
        alignment: .leading,
        spacing: 10
    ) {
        ForEach(
            1...10,
            id: \.self
        ) {
            Text("Item \($0)")
        }
    }
}
```

<br>

![Vstack-example](/SwiftUI-VStack.png)

<br>

[์ ํ ๊ณต์๋ฌธ์ : VStack](https://developer.apple.com/documentation/swiftui/vstack)


<br>

## ๐ LazyVStack

ํ๋ฉด์ ๋ณด์ด๋ ๋ถ๋ถ์์๋ง child ๋ทฐ๋ฅผ ๋ก๋ํด์ ์์ง์ผ๋ก ๋ณด์ฌ์ฃผ๋ ๋ทฐ

![LazyVStack](/lazyvstack.png)


- ๋ง ๊ทธ๋๋ก Lazyํด์ ํ๋ฉด์ ๋ณด์ด๋ ๋ถ๋ถ๊น์ง๋ง ๋ง๋ค๊ณ  ๋ ๋๋ง ํด์ ๋ณด์ฌ์ค๋ค.
- child ๋ทฐ๊ฐ ๋ง์์ ํ์ฌ ํ๋ฉด์์๋ ์ ๋ณด์ด๋ ๊ฒ๊น์ง ํ ๋ฒ์ ๋ค ๋ก๋ํ๋ฉด ์๊ฐ์ด ์ค๋ ๊ฑธ๋ฆฌ๋ ์น๊ตฌ๋ค์ `LazyVStack`์ ์ฌ์ฉํ๋๊ฐ ๋ณด๋ค.

- ์คํฌ๋กค์ด ์์ฒญ ๊ธด ์คํฌ๋กค ๋ทฐ์ VStack์ ์ฌ์ฉํ๋ฉด ํ ๋ฒ์ ๋ชจ๋  ๋ทฐ๋ฅผ ๋ก๋ํด์ผ ํ๋๊น ๋ก๋ฉ ์๊ฐ์ด ๊ธธ์ด์ง๋๋ฐ, LazyVStack์ ์ฌ์ฉํ๋ฉด ์คํฌ๋กค์ ๋ด๋ฆด ๋ ๋ณด์ด๋ ๋งํผ๋ง ๋ง๋ค๋ฉด ๋๋๊น ๋ ๋น ๋ฅธ ๊ฒ ๊ฐ๋ค.  

<br><br>

- ์์ : ScrollView๊ฐ ์์ง์ ํ์คํธ ๋ผ์ธ๋ค๋ก ๊ตฌ์ฑ๋ LazyVStack์ ํฌํจํ๊ณ  ์๋ค
    

<br>

```swift
// LazyVStack ์์

ScrollView {
	LazyVStack(alignment: .leading) {
		ForEacH(1...100, id: \.self) {
			Text("Row \($0)")
		}
	}
}
```

<br>

![algin](/align.png)

โ LazyVStack ์ฌ์ฉ์ ์คํ์ ์คํฌ๋กค๋ทฐ์ leading edge(์ผ์ชฝ ๋ชจ์๋ฆฌ)์ ์ ๋ ฌ๋๋ค





<br>

[์ ํ ๊ณต์๋ฌธ์ : LazyVStack](https://developer.apple.com/documentation/swiftui/lazyvstack)


<br>

```toc

```