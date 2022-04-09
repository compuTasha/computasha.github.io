---
emoji: 📱
title: 'VStack과 LazyVStack은 언제 사용하지? - SwiftUI'
date: '2022-04-09 22:56:00'
author: 콤퓨타샤
tags: iOS SwiftUI computasha
categories: iOS
---


## VStack

child 뷰를 수직으로 정렬하는 뷰

![VStack](/vstack.png)

- `Vstack`은 화면 상에 보이던 안 보이던 child 뷰를 전부 로드한다. **child 뷰 수가 적고 렌더링이 딜레이 되면 안 되는 상황에는 `Vstack`을 사용하자** 

- 예시 : 텍스트 뷰 10개를 포함한 VStack

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

[애플 공식문서 : VStack](https://developer.apple.com/documentation/swiftui/vstack)


<br>

## LazyVStack

화면에 보이는 부분에서만 child 뷰를 로드해서 수직으로 보여주는 뷰

![LazyVStack](/lazyvstack.png)


- 말 그대로 Lazy해서 화면에 보이는 부분까지만 만들고 렌더링 해서 보여준다.
- child 뷰가 많아서 현재 화면에서는 안 보이는 것까지 한 번에 다 로드하면 시간이 오래 걸리는 친구들은 `LazyVStack`을 사용하는가 보다.

- 스크롤이 엄청 긴 스크롤 뷰에 VStack을 사용하면 한 번에 모든 뷰를 로드해야 하니까 로딩 시간이 길어지는데, LazyVStack을 사용하면 스크롤을 내릴 때 보이는 만큼만 만들면 되니까 더 빠른 것 같다.  

<br><br>

- 예시 : ScrollView가 수직의 텍스트 라인들로 구성된 LazyVStack을 포함하고 있다
    

<br>

```swift
// LazyVStack 예시

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

→ LazyVStack 사용시 스택은 스크롤뷰의 leading edge(왼쪽 모서리)에 정렬된다





<br>

[애플 공식문서 : LazyVStack](https://developer.apple.com/documentation/swiftui/lazyvstack)


<br>
