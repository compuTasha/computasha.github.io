---
emoji: ๐ฎ
title: Github ๋ธ๋ก๊ทธ์ ๋๊ธ ๊ธฐ๋ฅ ์ถ๊ฐํ๊ธฐ - Utterances
date: '2022-01-13 21:06:00'
author: ์ฝคํจํ์ค
tags: Utterances github-pages computasha
categories: etc.
---

๐ฎย Utterances ๋ ๊นํ๋ธ ์ด์๋ฅผ ๊ธฐ๋ฐ์ผ๋ก ๋๊ธ์ ๋ฌ ์ ์๊ฒ ๋ง๋ค์ด์ฃผ๋ ๊นํ๋ธ ์ฑ์ด๋ค.

๋ฌด๋ฃ์๋ค๊ฐ ํ๋ง๋ ๋ค์ํ๊ณ  ๊ด๊ณ ๋ ์์ด์ ์ ํํ๋ค.

(Disqus ๋ผ๋ ๊ฒ๋ ์๋๋ฐ ๊ทธ๊ฑด ๋ถ๋ถ ์ ๋ฃ๋ผ์ ๋ณด๋ฅ...)

<br>

## ๐ก ๋์ ์๋ฆฌ

Utterances๊ฐ ๋ก๋๋๋ฉด, GitHub ย [issue search API](https://developer.github.com/v3/search/#search-issues) ๋ฅผ ์ฌ์ฉํ์ฌ `url`,ย `pathname`ย ๋๋ย `title`์ ๊ธฐ์ค์ผ๋ก ํ์ด์ง์ ๊ด๋ จ๋ ์ด์๋ฅผ ์ฐพ๋๋ค. ํ์ด์ง์ ์ผ์นํ๋ ์ด์๊ฐ ์์ผ๋ฉด ย [utterances-bot](https://github.com/utterances-bot) ์ด ๋๊ตฐ๊ฐ ๋๊ธ์ ๋ฌ ๋ ์๋์ผ๋ก ์ด์๋ฅผ ๋ง๋ ๋ค ~

<br>

## ๐ฌ Utterances ์ฌ์ฉํ๊ธฐ

[https://utteranc.es](https://utteranc.es/) ์์ ํ์ํ ์ ๋ณด 4๊ฐ์ง ์ ๋๋ง ์๋ ฅํ๋ฉด Utterances๋ฅผ ์ถ๊ฐํ  ์ ์๋ ์ฝ๋๋ฅผ ๋ง๋ค์ด์ค๋ค.

ํ๋ํ๋ ๊ณผ์ ์ ์ดํด๋ณด์.

<br>

### 1. Repository ๋ง๋ค๊ธฐ

์ฐ์  [https://github.com](https://github.com/) ์์ Utterances ์ ์ฐ๊ฒฐํ  repo(=Repository)๊ฐ ํ์ํ๋ค.

1. ๋ชจ๋๊ฐ ์ด์์ ๋๊ธ์ ํ์ธํ  ์ ์๋๋ก `public` ์ผ๋ก ์ค์ ํ๋ค.

2. repo๋ฅผ ๋ง๋ค๊ณ  [utterances app](https://github.com/apps/utterances) ์ ํด๋น repo์ ์ค์นํ๋ค.

   1. Install์ ๋๋ฌ ์ค์นํ์. (๋ ์ด๋ฏธ ์ค์นํ ์ํฉ์ด๋ผ Configure๋ผ ์ ํ์๋ค)   

      ![utterances-1](/utterances-8.png)

   2. ์ด๋, ๊ถํ์ ์๋ก ๋ง๋  repo์๋ง ์ฃผ๋ฉด ๋๋ค.

      ![utterances-2](/utterances-1.png)

3. ํด๋น repo์ URL์์ โ์ฌ์ฉ์์ด๋ฆ/repo์ด๋ฆโ์ [https://utteranc.es](https://utteranc.es/) ์ฌ์ดํธ์ ์๋ ฅํ๋ค. 

   e.g. ๋ด repo์ URL์ด [https://github.com/compuTasha/blog-comments.git](https://github.com/compuTasha/blog-comments.git) ๋ฉด, ์ฌ๊ธฐ์ compuTasha/blog-comments ๋ฅผ ์๋ ฅํ๋ฉด ๋๋ค.

   ![utterances-3](/utterances-2.png)

<br>

### 2. Mapping ์ ํํ๊ธฐ

์ด์  ๋ธ๋ก๊ทธ ๊ธ๊ณผ ๊นํ๋ธ ์ด์๋ฅผ ์ฐ๊ฒฐํด์ค ๋งคํ ๋ฐฉ๋ฒ์ ์ ํด์ผ ํ๋๋ฐ, 

๊ฒ์ํด๋ณด๋ ์ฃผ๋ก pathname ๊ณผ url์ ์ ํํ๋ ๊ฒ ๊ฐ๋ค.

(title๋ก ์ค์ ํ๋ฉด ๋ธ๋ก๊ทธ ๊ธ ์ ๋ชฉ์ ๋ณ๊ฒฝํ๋ฉด ๋ชป ์ฐพ๋ ๊ฒฝ์ฐ๋.. ์๊ธฐ๋ ๋ฏ ํ๋ค )

![utterances-4](/utterances-3.png)

<br>

### 3. Issue Label ์ค์  (optional)

๊นํ๋ธ์์๋ ๊ฐ ์ด์๊ฐ ์ด๋ค ์ข๋ฅ์ธ์ง ์ฝ๊ฒ ๊ตฌ๋ณํ๊ธฐ ์ํด ๋ผ๋ฒจ(Label)์ ์ฌ์ฉํ๋ค.

์ด ๋ถ๋ถ์ ์ํ๋ ์ฌ๋๋ง ์ฑ์ฐ๋ฉด ๋๋ค!

๋๋ `utterances` ๋ฅผ ์ ์๋ค.

![utterances-5](/utterances-4.png)

<br>

### 4. ํ๋ง ์ค์ 

์ด์  ์ํ๋ ํ๋ง๋ง ์ค์ ํ๋ฉด ๋๋ค.

๋๋ ๊ฐ์ฅ ๊น๋ํ Github Light๋ฅผ ๊ณจ๋๋ค.

![utterances-6](/utterances-5.png)

<br>

์ด 4๊ฐ์ง๋ฅผ ๋ชจ๋ ์์ฑํ๋ฉด ์๋ ์ด์ ๊ฐ์ ์ฝ๋๊ฐ ๋ง๋ค์ด์ง๋๋ฐ,


์ํ๋ html ํ์ผ์ ์ฝ๋๋ฅผ ๋ถ์ฌ๋ฃ๊ธฐ๋ง ํ๋ฉด ๋๋ค.

 ![utterances-7](/utterances-6.png)

๊ทธ๋ผ ๋ค์๊ณผ ๊ฐ์ด ๋๊ธ ๊ธฐ๋ฅ์ด ์์ฑ๋๋ค!

![utterances-8](/utterances-7.png)

๋.

<br><br>


```toc

```