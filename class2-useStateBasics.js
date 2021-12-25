import { useState } from 'react' //'react' library에서 useState 불러올 것
import logo from './logo.svg'; //src, id, href 등 속성도 import와 중괄호 이용해 데이터 바인딩!
import './App.css';

function App() {

  //JSX 이용해 데이터 바인딩을 쉽게 할 수 있어요
  let posts = '강남 고기 맛집';
  


  //데이터를 state에 저장하기!
  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집']); //[a(앞의 데이터),b(데이터 수정 함수)] 데이터 두 개의 array 생성
  //web이 app처럼 동작하도록 하기 위해 변수가 이닌 state에 데이터 저장! -> HTML이 자동으로 재렌더링(새로고침 X)
  //자주 바뀌면서 중요한 데이터는 변수가 아닌 state에 저장하기

  //ES6 destructuring
  //var [a,b] = [10,100] : a엔 10, b엔 100 저장

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 BLOG</div>
      </div>
      <div className="list">
        <h3> { 글제목[0] } </h3>
        <p>12월 24일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>12월 24일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> { posts } </h3>
        <p>12월 24일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;