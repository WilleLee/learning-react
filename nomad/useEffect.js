import { useState, useEffect } from "react";

function App() {
  const [counter, editCounter] = useState(0);
  const onClick = () => editCounter((prev)=>{return prev+1});
  console.log("I run all the time."); // 컴포넌트의 일부 코드가 바뀔 때마다 rerendering 되어요


  useEffect(()=>{
    console.log("I run only once.");
  }, []);
  //useEffect는 코드가 단 한 번만 실행되도록 해요. (API를 한 번만 호출)
  const [keyword, editKeyword] = useState("");
  const onChange = (event) => editKeyword(event.target.value);
  //console.log("searching for ", keyword);//다른 코드가 변할 때에도 키워드를 찾아

  useEffect(()=>{
    //console.log("searching for ", keyword);//keyword가 변할 때에만 실행하고 시포
    if(keyword !== "" && keyword.length > 4){
      console.log("searching for ", keyword);
    };
  }, [keyword]); // 키워드가 변화하고(1) 키워드가 ""이 아니고(2) 키워드 길이가 >4 일 때(3) 실행!

  useEffect(()=>{
    console.log("I run when any of keyword and counter changes.");
  },[keyword, counter]);
  

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>

    <input
      value={keyword}
      onChange={onChange}
      type="text"
      placeholder="Search here..."
    />
    </div>
  );
}

export default App;