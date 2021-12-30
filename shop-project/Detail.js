/*eslint-disable*/

import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let 박스 = styled.div`
  padding : 20px;
`; // 백틱 사용 : CSS를 입힌 component를 사용하는 것 : className 작명 필요 X
let 제목 = styled.h4`
  font-size : 25px;
  color : ${ props => props.color };
`;

/*
class Detail2 extends React.Component {

  componentDidMount(){ //component가 mount 되었을 때 실행

  }

  componentWillUnmount(){ //component가 사라질 때 실행

  }

}
*/





function Detail(props){


  let history = useHistory(); // 방문기록들을 저장해 놓은 object
  let { id } = useParams(); //parameter value 저장
  let idProduct = props.products.find(function(a){
    return a.id == id
  });

  let [AlertState, AlertBye] = useState('myAlertYellow');

  useEffect(()=>{ // 하나의 hook : mount될 때, rerendering될 때 / callback function 이용
    let 타이머1 = setTimeout(()=>{
      AlertBye('myAlertYellow invisible');
    }, 2000);
    // return function 어쩌구() { 실행할 코드 } ... unmount 될 때 실행할 코드
    //실행할 useEffect가 많을 때에는 여러 개의 useEffect를 생성해도 됨 ( 순서대로 작동 )
    return ()=>{ clearTimeout(타이머1) }
  }, []/* 실행조건 ... 비워두면 업데이트시에 실행되지 않음 = 페이지가 실행되었을 때에만 */ );

  let [magicAlert, magicMagic] = useState(true);

  useEffect(()=>{
    let 타이머2 = setTimeout(()=>{ magicMagic(false) } ,2000);
    return ()=>{ clearTimeout(타이머2) } // Detail component가 사라질 때 타이머 제거 -> 버그 방지
  }, [])

  let [inputState, inputStateFunction] = useState('');


  return (
    <div className="container">

      <박스>
        <제목 className='red'>details</제목>
      </박스>

      {/*alert창*/}
      <div className={AlertState}>
        <p>Only few pairs remain.</p>
      </div>
      

      <input onChange={ (e)=>{ inputStateFunction(e.target.value) } } /> {/* 그런데 입력시마다 업데이트 됨 */}


      {/* 이렇게도 가능!!! */}
      {magicAlert==true 
        ? <YellowAlert></YellowAlert>
        : null
      }
      

      <div className='row'>
        <div className='col-md-6'>
          <img src={idProduct.link} width='100%' />
        </div>
        <div className='col-md-6 mt-4'>
          <h4 className='pt-5'>{idProduct.title}</h4>
          <p>{idProduct.content}</p>
          <p>{idProduct.price}won</p>
          <button className="btn btn-danger">Order</button>
          <button className="btn btn-danger" onClick={()=>{
            // history.goBack();
            history.push('/');
          }}>Back</button>
        </div>
      </div>
    </div>
  )
}

function YellowAlert() {
  return (
    <div className='myAlertYellow'>
      <p>this is an alert</p>
    </div>
  )
}


export default Detail; //변수명 혹은 함수명 사용 가능