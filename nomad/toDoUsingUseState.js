//to-do list
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const currentInput = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return; // 함수를 작동시키지 않음
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo(""); // 실행 시 인풋은 비움
  };
  console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={ onSubmit }>
        <input
          value={toDo}
          onChange={ currentInput }
          type="text"
          placeholder="Write your to do..."
        />
        <button>submit</button>
      </form>
      <hr />
      <ul>
        {
          toDos.map((a,i) => {
            return (
              <li key={i}>
                {a}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default App;