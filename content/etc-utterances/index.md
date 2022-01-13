---
emoji: 🔮
title: Github 블로그에 댓글 기능 추가하기 - Utterances
date: '2022-01-13 21:06:00'
author: 콤퓨타샤
tags: Utterances github-pages computasha
categories: etc.
---

🔮 Utterances 는 깃허브 이슈를 기반으로 댓글을 달 수 있게 만들어주는 깃허브 앱이다.

무료에다가 테마도 다양하고 광고도 없어서 선택했다.

(Disqus 라는 것도 있던데 그건 부분 유료라서 보류...)

<br>

## 💡 동작 원리

Utterances가 로드되면, GitHub  [issue search API](https://developer.github.com/v3/search/#search-issues) 를 사용하여 `url`, `pathname` 또는 `title`을 기준으로 페이지와 관련된 이슈를 찾는다. 페이지와 일치하는 이슈가 없으면  [utterances-bot](https://github.com/utterances-bot) 이 누군가 댓글을 달 때 자동으로 이슈를 만든다 ~

<br>

## 💬 Utterances 사용하기

[https://utteranc.es](https://utteranc.es/) 에서 필요한 정보 4가지 정도만 입력하면 Utterances를 추가할 수 있는 코드를 만들어준다.

하나하나 과정을 살펴보자.

<br>

### 1. Repository 만들기

우선 [https://github.com](https://github.com/) 에서 Utterances 와 연결할 repo(=Repository)가 필요하다.

1. 모두가 이슈와 댓글을 확인할 수 있도록 `public` 으로 설정한다.

2. repo를 만들고 [utterances app](https://github.com/apps/utterances) 을 해당 repo에 설치한다.

   1. Install을 눌러 설치하자. (난 이미 설치한 상황이라 Configure라 적혀있다)   

      ![utterances-1](/utterances-8.png)

   2. 이때, 권한은 새로 만든 repo에만 주면 된다.

      ![utterances-2](/utterances-1.png)

3. 해당 repo의 URL에서 ‘사용자이름/repo이름’을 [https://utteranc.es](https://utteranc.es/) 사이트에 입력한다. 

   e.g. 내 repo의 URL이 [https://github.com/compuTasha/blog-comments.git](https://github.com/compuTasha/blog-comments.git) 면, 여기서 compuTasha/blog-comments 를 입력하면 된다.

   ![utterances-3](/utterances-2.png)

<br>

### 2. Mapping 선택하기

이제 블로그 글과 깃허브 이슈를 연결해줄 매핑 방법을 정해야 하는데, 

검색해보니 주로 pathname 과 url을 선택하는 것 같다.

(title로 설정하면 블로그 글 제목을 변경하면 못 찾는 경우도.. 생기는 듯 하다 )

![utterances-4](/utterances-3.png)

<br>

### 3. Issue Label 설정 (optional)

깃허브에서는 각 이슈가 어떤 종류인지 쉽게 구별하기 위해 라벨(Label)을 사용한다.

이 부분은 원하는 사람만 채우면 된다!

나는 `utterances` 를 적었다.

![utterances-5](/utterances-4.png)

<br>

### 4. 테마 설정

이제 원하는 테마만 설정하면 된다.

나는 가장 깔끔한 Github Light를 골랐다.

![utterances-6](/utterances-5.png)

<br>

이 4가지를 모두 작성하면 아래 이와 같은 코드가 만들어지는데,


원하는 html 파일에 코드를 붙여넣기만 하면 된다.

 ![utterances-7](/utterances-6.png)

그럼 다음과 같이 댓글 기능이 생성된다!

![utterances-8](/utterances-7.png)

끗.

<br><br>


```toc

```