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

8. Ajax : 서버에 새로고침 없이 요청을 할 수 있게 도와줌

npm install axios ... import axios from 'axios';

axios : json을 object로 알아서 바꿔줌 -> 코드가 짧아져요

9. redux ... npm install redux react-redux (redux와 react-redux 설치)

redux 쓰는 이유?
.. 1. props 없이 모든 components가 같은 state 공유 가능

... index.js .. import { Provider } from 'react-redux';
... .. App을 Provider로 감쌈
... .. let 변수명 = createStore( ()=>{ return [ ... ] } ); (state 생성, 저장)
... .. Provider store={store}
... 대상.js에서 데이터바인딩
... .. function state를props화(state){ // redux 변수명 데이터 가져와서 props로 변화
  return {
    state : state // state의 모든 데이터를 state라는 props로 저장
  }
}
... .. export default connect(state를props화))(export하는 함수명)

.. 2. state 데이터 관리기능