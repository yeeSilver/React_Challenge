import React, {useState} from "react";
import "./App.css";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");


  const btnStyle = {
    color: "gray",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    float: "right",
  }

  const getStyle = (completed) => {
    return{
      padding: "10px",
      borderBottom: "1px #EFF4E7 solid",
      textDecoration: completed ? "line-through" : "none",
      verticalAlign: 'middle',
    }
  }

  const inputStyle = {
    verticalAlign: 'middle'
  }

  const deleteClick = (key) => {
    let newTodoData = todoData.filter(data => data.id !== key);
    setTodoData(newTodoData);
  }

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

  const completedChange = (key) => {
    let newTodoData = todoData.map(data => {
      if(data.id === key){
        data.completed = !data.completed;
      }
      return data;
    })
    setTodoData(newTodoData);
  }


    return (
      <div className="container">
        <main className="todoBox">
          <h1>
            💡 To Do List 💡
          </h1>

          {todoData.map((data) => (
          <section style={getStyle(data.completed)} key={data.id}>
            <input type="checkbox" defaultChecked={false} style={inputStyle} onChange = {() => completedChange(data.id)}/>
            {data.title}
            <button style={btnStyle} onClick={() => deleteClick(data.id)}>✖</button>
          </section>
          ))}

          <form style={{display: "flex", marginTop: "10px"}} onSubmit={addClick}>
            <input 
              type = "text"
              name = "value"
              style = {{ flex: "15", padding: "5px", border: "none"}}
              placeholder = "어떤 할 일이 있으신가요?"
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

