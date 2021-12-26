
/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {

  // Making UI in React
  // 1. make a state
  // 2. code like "if the state is like this, show UI like this"
  // 3. if needed, add like "when this button is activated, make state like blah blah"
  // *** remember like a state is a storage to do a role saving the current state of an UI
  

  let [heartNum, heartFunction] = useState([0,0,0]);

  let [titleState, titleFunction] = useState(['title1','title2','title3']);

  let [modalState, modalFunction] = useState(false);

  let [modalControl, modalControlFunction] = useState(0);

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
