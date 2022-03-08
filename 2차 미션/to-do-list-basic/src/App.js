import React, {useState, useCallback} from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import DeleteAll from "./components/DeleteAll";
// 주로 최상위 폴더에 함수를 만든다.. 왜??

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  // todoData가 바뀔때만 다시 생성해줄 수 있게 useCallback
  const deleteClick = useCallback((id) => {
    let newTodoData = todoData.filter(data => id !== data.id);
    setTodoData(newTodoData);
  }, [todoData]);

  const deleteAllClick = useCallback(() => {
    setTodoData([]);
  }, [todoData]);

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
          <div className="flex justify-between mb-5">
            <h1 className="text-3xl"> 
              💡 To Do List 💡
            </h1>
            <DeleteAll  deleteAllClick={deleteAllClick}/>
          </div>
        <List deleteClick ={deleteClick} todoData={todoData} setTodoData={setTodoData}/>
          <Form value={value} setValue={setValue} addClick = {addClick}/>
        </main>
      </div>
    )
  }

