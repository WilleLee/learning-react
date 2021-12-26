/* eslint-disable */ //warning 제거
import { useState } from 'react'
import './App.css';

function App() {

  let [heartNum, 하트변경] = useState([0,0,0]);

  let [글제목, 글제목변경] = useState(['title1','title2','title3']);

  
  function 하트각각변경(i){
    let heartNumCopy = [...heartNum];
    heartNumCopy[i]++;
    하트변경(heartNumCopy);
  }

  /*
  var array = [2,3,4];

  var newArray = array.map( function(a){
    return a * 2 //각각의 값에 2를 곱함
  } );
  */

  function 반복된UI(){

    var array1 = [];
    for (var i = 0; i < 3; i++){
      array1.push(<div>안녕</div>);
    }

    return array1
  }


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 BLOG</div>
      </div>

      {
        글제목.map(function(a, i){ // a <- 글제목 안 각각의 데이터
          return (
            
            <div className="list">
              <h3> { a }<span className="heartBtn" onClick={()=>하트각각변경(i)}>❤</span> <span>{heartNum[i]}</span></h3>
              <p>12월 25일 발행</p>
              <hr />
            </div> //반복시킬 HTML 태그

            )
        })
      }
      
      {반복된UI()}
      

    </div>
  );
}

//반복문 쓰는 법?
// JSX 중괄호 내에 for 문을 넣을 수는 없음






export default App;