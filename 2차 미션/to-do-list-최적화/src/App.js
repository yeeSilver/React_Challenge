import React, {useState} from "react";
import "./App.css";
import List from "./components/List";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");


  const printClick = (e) => {
    setValue(e.target.value);
  }

  const addClick = (e) => {
    e.preventDefault(); //버튼 클릭시 리로드 되지 않게 하기 위함.

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    }

    setTodoData(prev => [...prev, newTodo]);
    setValue("")
  }



    return (
      <div className="container">
        <main className="todoBox">
          <h1>
            💡 To Do List 💡
          </h1>

          <List todoData = {todoData} setTodoData = {setTodoData}/>

          <form style={{display: "flex", marginTop: "10px"}} onSubmit={addClick}>
            <input 
              type = "text"
              name = "value"
              style = {{ flex: "15", padding: "5px", border: "none"}}
              placeholder = "HEY, what you gonna do?"
              fontFamily = "font-family: 'Hahmlet', serif;"
              value = {value}
              onChange={printClick}/>

            <input 
              type = "submit"
              value = "➕"
              className = "submitBtn"
              style = {{flex: 1, marginLeft:"2px", backgroundColor: "gold", borderRadius: "5px", border: "none", cursor: "pointer"}}/>
          </form>
        </main>
      </div>
    )
  }

