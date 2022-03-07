import React, {useState} from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");



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

          <List todoData={todoData} setTodoData={setTodoData}/>
          <Form value={value} setValue={setValue} addClick = {addClick}/>
      
          

            
        </main>
      </div>
    )
  }

