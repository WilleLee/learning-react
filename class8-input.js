
/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {
  

  let [heartNum, heartFunction] = useState([0,0,0]);

  let [titleState, titleFunction] = useState(['title1','title2','title3']);

  let [modalState, modalFunction] = useState(false);

  let [modalControl, modalControlFunction] = useState(0);

  let [inputValue, inputFunction] = useState(''); //초기값 음슴



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
            <div className='list' key={index}>
              <h3>
                <span className='listTitle' onClick={ ()=>{ modalControlFunction(index) } }>{ a }</span>
                <span className='heartBtn' onClick={ ()=>heartFunctionAdd(index) }>❤</span>
                <span className='heartCount'>{heartNum[index]}</span>
              </h3>
              <p>date</p>
              <hr />
            </div>
          )
        })
      }

      <SeparateModal titleState={titleState} modalControl={modalControl} />    

      {/*
      <input onChange={ (e)=>{ inputFunction(e.target.value); console.log(inputValue) } } />
      */}
      {/*onChange, onInput*/}
      <div className='publish'>
        <input onChange={ (e)=>{ inputFunction(e.target.value) } } />
        <button onClick={ ()=>{
          let titleCopy = [...titleState];
          titleCopy.unshift(inputValue);
          titleFunction(titleCopy); // title 추가

          let heartNumCopy = [...heartNum];
          heartNumCopy.unshift(0);
          heartFunction(heartNumCopy); // heartNum 0 하나 추가
        } }>save input</button>
      </div>

      <button className='modalBtn' onClick={()=>{
        modalState === false ? modalFunction(true) : modalFunction(false)
      }}>{modalState===false?'view the modal':'hide the modal'}</button>

      {
        modalState === true
        ? <Modal />
        : null
      }

    </div>
  );

  
}
function Modal(){
  return (
    <div className='modal'>
      <h2>fuck you</h2>
      <p>date</p>
      <p>detailed infos</p>
    </div>
  )
}

function SeparateModal(props){
  return (
    <div className='modal'>
      <h2>{ props.titleState[props.modalControl] }</h2>
      <p>date</p>
      <p>detailed infos</p>
    </div>
  )
}


export default App;
