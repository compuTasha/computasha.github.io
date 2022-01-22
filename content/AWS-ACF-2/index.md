---
emoji: ☁️
title: '[TIL] AWS ACF 2. 클라우드 컴퓨팅 서비스 모델'
date: '2022-01-12 23:45:00'
author: 콤퓨타샤
tags: AWS cloud-computing computasha IaaS PaaS SaaS
categories: AWS
---

## 💥 IaaS, PaaS, SaaS
![클라우드 컴퓨팅 서비스 모델](/AWS-ACF-2-service-model.png)  

각 모델은 클라우드 컴퓨팅 스택의 각기 다른 부분에 해당한다. 이를 통해 IT 리소스에 대한 다양한 수준의 제어를 제공하고 있다.

![서비스 모델 책임 범위](/AWS-ACF-2-responsibility.png)

### 1. IaaS(서비스형 인프라)
= Infrastructure as a Service
- 일반적으로 네트워크 기능과 서버, 가상 또는 전용 컴퓨터에 대한 액세스를 제공하고 스토리지 공간도 제공한다.
- IT 리소스에 대한 최고 수준의 유연성과 제어 기능을 제공한다.
- 현재 많은 IT 부서 및 개발자에게 익숙한 기존 구현 방식(=온프레미스 방식)과 가장 유사하다.
- 대표적인 예시로 AWS의 EC2(Amazon Elastic Compute Cloud)가 있다.

### 2. PaaS(서비스형 플랫폼)
= Platform as a Service
- PaaS를 사용하면 기반 인프라를 관리할 필요가 없다. (하드웨어 및 운영체제와 관련된)
- **자동화 기능**을 통해 관리되므로 프로비저닝 작업이 아니라 애플리케이션을 배포하고 관리하는 데 집중할 수 있다.  

### 3. SaaS(서비스형 소프트웨어)
= Software as a Service
- 서비스 공급자에 의해 실행되고 관리되는 **완전한 제품**을 고객에게 제공한다.
- 대부분 SaaS는 최종 사용자 애플리케이션을 지칭한다.  
- 서비스를 유지 관리하는 방법이나 기본 인프라를 관리하는 방법에 대해 생각할 필요가 없고, 특정 소프트웨어를 어떻게 사용할지만 생각하면 된다.  
    e.g.  예시 : 서버와 이메일 제품을 관리하거나 이메일 시스템의 운영 체제를 유지 관리할 필요 없이 이메일을 보내고 받을 수 있는 웹 기반 이메일 애플리케이션 

<br><br>

```toc

```