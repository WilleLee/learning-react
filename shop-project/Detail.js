/*eslint-disable*/

import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';



function Detail(props){

  let history = useHistory(); // 방문기록들을 저장해 놓은 object
  let { id } = useParams(); //parameter value 저장
  let idProduct = props.products.find(function(a){
    return a.id == id
  });

  return (
    <div className="container">
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

export default Detail; //변수명 혹은 함수명 사용 가능