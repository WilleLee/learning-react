# Learning React
This is where I learn how to build web-apps using react.

# Project making an online mall

## building a new project

1. terminal -> npx create-react-app shop
... yarn 1.22 version 설치하는 게 좋음

2. react bootstrap 이용 ... HTML/CSS 쌩코딩 X
...react bootstrap - get started - terminal : installation code & CSS code를 index.html에 copy&paste

3. copying JSX tags & "importing components"!!
...original bootstrap의 code를 가져와도 됨

4. react router ... npm install react-router-dom@5 -> 설치
... index.js -> import { BrowserRouter } from 'react-router-dom';
... react router -> 하나의 HTML만으로 보이는 HTML의 내용을 변경해 다른 페이지처럼 작동!

5. styled componenets (CSS in JS)
... npm install styled-components -> import styled from 'styled-components'

6. sass : npm install node-sass ( sass를 css로 컴파일해줌 )


7. lifecycle hook / useEffect

... component lifecycle : appear -> update (rerendering) -> exit
component의 lifecycle 중간중간에 명령을 줄 수 있음 (lifecycle hooks)

class ... extends React.Component {
  componentDidMount(){ ... }
  componentWillUnmount(){ ... }
}

... import { useEffect } from 'react';

useEffect( codes to operate! )