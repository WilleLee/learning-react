import logo from './logo.svg'; //src, id, href 등 속성도 import와 중괄호 이용해 데이터 바인딩!
import './App.css';

function App() {

  //JSX 이용해 데이터 바인딩을 쉽게 할 수 있어요
  let posts = '강남 고기 맛집';
  function 함수(){
    return 100
  }

  let divStyle = { color : 'white', fontSize : '30px' };

  return (
    <div className="App">
      <div className="black-nav">
      {/* html 대신 JSX 문법 사용.
      class 대신 className="..." */}
        <div style={ divStyle }>개발 BLOG</div> {/*스타일을 직접 넣을 수 있음. 중괄호와 object형 활용 ... 혹은 변수로 볼러오기*/}
      </div>
      <h4> { posts } </h4> {/*중괄호 이용해 데이터 바인딩!*/}
      <h5> { 함수() } </h5>
      <img src={ logo } /> {/*import 해온 이미지 파일을 중괄호 이용해 불러옴*/}
    </div>
  );
}

export default App;