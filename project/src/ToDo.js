import { useEffect, useState } from "react";
import styles from "./ToDo.module.css";

const ToDo = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChangeInput = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo.length < 3){
      return;
    }
    setToDos((prev)=>[toDo, ...prev]);
    setToDo("");
  };

  const [deleteInfo, setDeleteInfo] = useState(true);
  useEffect(() => {
    setDeleteInfo(true);
    setTimeout(() => {
      setDeleteInfo(false);
    }, 2500);
  },[toDos]);

  return (
    <div>
      <h1 style={{
        marginTop : "10px",
        fontSize : "30px",
        color : "#555",
      }}>
        오늘 할 일 ({toDos.length})
      </h1>
      <form onSubmit={onSubmit}>
        <div className={styles.formContainer}>
          <input
            className={styles.input}
            value={toDo}
            onChange={onChangeInput}
            type="text"
            placeholder="what u goona do today? (type more than 3 characters)"
          />
          <button
            className={styles.btn}
          >
            Add to List
          </button>
        </div>
      </form>

      {
        deleteInfo
        ? (
          <div className={styles.deleteInfo}>
            <p>click banners to exclude</p>
          </div>

        )
        : null
      }

      <div>
        <div className={styles.toDoList}>
          {
            toDos.map((a,i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setToDos((prev) => [...prev.slice(0,i), ...prev.slice(i+1,prev.length)]);
                  }}
                  className={styles.toDoLists}
                >
                  {a}
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ToDo;