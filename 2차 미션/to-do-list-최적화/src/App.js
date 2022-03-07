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
      <div className="flex items-center justify-center w-screen h-screen">
        <main className="formbox w-full p-6 m-4 rounded shadow-sm lg:w-3/4 lg:max-w-lg">
          {/* lg:max-w-lg => max-width: 32rem 라지 사이즈일때 32rem을 넘지 않게 함.*/}
          <div className="flex justify-center mb-5">
          <h1 className="text-3xl"> 
            💡 To Do List 💡
          </h1>
          </div>
          <List todoData={todoData} setTodoData={setTodoData}/>
          <Form value={value} setValue={setValue} addClick = {addClick}/>

        </main>
      </div>
    )
  }

