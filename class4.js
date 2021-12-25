/* eslint-disable */ //warning 제거
import { useState } from 'react'
import logo from './logo.svg'; 
import './App.css';

function App() {

  let [heartNum, 하트변경] = useState(0);
  let [글제목, 글제목변경] = useState(['title1','title2','title3']);
  
  let [modal, modal변경] = useState(false);
  //모달창 켜고 닫는 스위치를 state로 생성

  let [amazingModal, amazingModal변경] = useState(false);


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 BLOG</div>
      </div>
      <div className="list">
        <h3> { 글제목[0] } <span className="heartBtn" onClick={()=>하트변경(heartNum+1)}>❤</span> <span>{heartNum}</span> </h3>
        <p>12월 24일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>12월 25일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3 onClick={()=>modal변경(true)}> { 글제목[2] } </h3>
        {/*클릭하면 modal변경 함수 실행 -> useState 내용 true로 변경 -> Modal 나타남*/}
        <p>12월 26일 발행</p>
        <hr />
      </div>

      {/*html을 한 단어로 줄이기 : react component*/}
      {/* <Modal /> */}
      {/*
      1. 이름은 대문자로 시작
      2. return 내부는 하나의 태그로 묶여야 함
      3. function App과 나란히

      어떤 UI를 component로?
      1. 반복 출현하는 HTML 덩어리들
      2. 자주 변경되는 HTML UIs ... 성능적 이점
      3. 다른 페이지를 구성할 때도 component로 만들기

      component의 단점
      1. state를 쓰면 복잡
      (상위 component에서 만든 state를 쓰려면 props 문법 사용해야 함)
      */}

      {
        //if 대신 삼항연산자 사용
        modal == true
        ? <Modal />
        : null //텅 빈 HTML을 의미
      }

      <button className="amazingBtn" onClick={()=>
        amazingModal == false ? amazingModal변경(true): amazingModal변경(false) 
      }>amazing</button>

      {
        amazingModal == true ? <Amazing /> : null
      }

    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
      <h2>title</h2>
      <p>date</p>
      <p>details</p>
    </div>
  )
}

function Amazing(){
  return (
    <div className='modal'>
      <h2>amazing title</h2>
      <p>date</p>
      <p>details</p>
    </div>
  )
}


export default App;