/* eslint-disable */ //warning 제거
import { useState } from 'react'
import logo from './logo.svg'; 
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(["Who's your fav?", 'Hot Now', 'Front-End Basics']);

  let [heartNum, 하트변경] = useState(0);
  
  /*
  function 글제목변경함수(){
    글제목변경( ['aethletic guys, boviously', 'Hot Now', 'Front-End Basics'] );
  }
  */

  /*
  function 글제목변경함수(){
    //state를 deep copy해야 해
    var newArray = [...글제목]; //spread operator.. 완전 별개의 array 생성, immutable data
    newArray[0] = 'aethletic guys, obviously';
    글제목변경( newArray );
  }
  */

  function 글제목변경함수정렬(){
    var newArray = [...글제목];
    newArray.sort();
    글제목변경( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 BLOG</div>
        <button onClick={ 글제목변경함수정렬 }>Click Me!</button>
      </div>
      <div className="list">
        <h3> { 글제목[0] } <span className="heartBtn" onClick={()=> 하트변경(heartNum + 1) }>❤</span> <span>{heartNum}</span> </h3>
        <p>12월 24일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>12월 25일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p>12월 26일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;