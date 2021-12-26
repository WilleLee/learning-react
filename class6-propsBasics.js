/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {
  

  let [heartNum, heartFunction] = useState([0,0,0]);

  let [titleState, titleFunction] = useState(['title1','title2','title3']);

  let [modalState, modalFunction] = useState(false);

  function heartFunctionAdd(index){
    let heartCopy = [...heartNum];
    heartCopy[index]++;
    heartFunction(heartCopy);
  }

  return (
    
    <div className="App">
      <div className="black-nav">
        <div>개발 BLOG</div>
      </div>

      
      {
        titleState.map((a, index)=>{
          return (
            <div className='list'>
              <h3>{ a }<span className='heartBtn' onClick={ ()=>heartFunctionAdd(index) }>❤</span><span className='heartCount'>{heartNum[index]}</span></h3>
              <p>date</p>
              <hr />
            </div>
          )
        })
      }
    

      <button className='modalBtn' onClick={()=>{
        modalState === false ? modalFunction(true) : modalFunction(false)
      }}>{modalState===false?'view the modal':'hide the modal'}</button>

      {
        modalState === true
        ? <Modal titleState={titleState} /> //newState={oldState}로 불러옴
        : null
      }

    </div>
  );

  
}
function Modal(props){
  return (
    <div className='modal'>
      <h2>{ props.titleState[1] }</h2>
      <p>date</p>
      <p>detailed infos</p>
    </div>
  )
}
//child component가 parent component의 state를 사용하려면?
//props로 자식에게 state를 전해주어야 함
// 1. <자식component newState={targeted state} />
// 2. 자식component에 props 파라미터 입력

export default App;