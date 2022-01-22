---
emoji: 👩🏻‍💻
title: 'CPU 코어와 스레드'
date: '2022-01-22 22:51:00'
author: 콤퓨타샤
tags: hardware computasha
categories: CS
---

## CPU 코어

CPU = centeral Processing Unit, 중앙 처리 장치

코어 = 물리적인 CPU의 프로세서를 의미

- 싱글 코어 = 한 명이 컴퓨터에서 일한다 = 한 번에 하나씩만 처리 가능
    
    → 한 번에 여러 개 처리하기 위해서는 현재 실행 중인 프로그램 간 전환을 빨리해서 사용자로 하여금 동시에 실행하고 있는 것처럼 느끼게 함
    
    
    그전에도 멀티코어의 개념은 등장했는데 개발하지 않은 이유
    
    1. 1980년쯤에는 싱글 코어로도 원하는 연산 수행 충분히 가능했음  
    2. 여태 만들어진 코드가 싱글 코어에서 최적의 성능을 보임 (이전 프로그램은 하나의 일을 분배하는데 시간이 더 오래걸렸음)
    
    좀 느리다 싶으면 CPU의 **클럭**을 올려서(=채찍질을 더 열심히 해서) 더 빨리 계산하게 만들면 감당 가능했음
    
    → 근데 이게 2004년도쯤 오니까 CPU가 과부화 돼서 뜨거워지기 시작함 CPU burning 🔥 
    → 그래서 인텔이 싱글코어 손절하고 듀얼코어로 전환 (정확히 2005년부터 멀티코어 CPU가 등장)  
    → 다수의 코어끼리의 **통신에** 집중 
    
    빌게이츠 왈 "개인용 컴퓨터는 640KB의 메모리면 누구에게나 충분하다."
    - 2007년 쿼드코어
    - 2008년 4코어 8스레드 i7 CPU의 등장
        
        
- 코어가 많다고 무조건 좋을까? → Hmm
    - 가벼운 프로그램을 돌릴 때 : 상관없음
    - 무거운 프로그램을 돌릴 때 : 싱글코어는 힘들다, 근데 만약 프로그램이 싱글코어에 최적화된 프로그램이라면 멀티코어의 성능을 100% 활용하기 어려울 수 있음

<br>

## 스레드

하이퍼 스레딩, SMT 기술을 이용하여 실제로는 하나의 코어지만 2개의 코어처럼 보이는 논리적인 CPU

- CPU의 스레드는 CPU 제조사의 기술을 말하고 우리가 아는 스레드는 소프트웨어 개념 스레드임
    
    소프트웨어 스레드 = time division multiplexing 시분할 다중화
    
- 2002년 인텔에서 발표한 **Hyper-Threading** 개념 (AMD는 SMT 기술) : 하나의 코어를 2개의 스레드로 나눠서 마치 2개의 물리적인 코어가 있는것처럼 동작함. → CPU 입장에서는 탑시크릿임. OS 조차 모르게 하라..
    
    → 1코어 2스레드 CPU를 윈도우컴에 사용시, 리소스 모니터 창에서 2개의 CPU를 확인할 수 있음 = 물리적인 코어는 1개 밖으로 보이는 코어는 2개
    
<br><br>

**참고 링크**

[CPU 코어와 스레드(ft.하이퍼스레딩) 가장 쉬운 설명 듣고 가시죠 - [高지식] 거니](https://youtu.be/_dhLLWJNhwY)


<br><br>

```toc

```
