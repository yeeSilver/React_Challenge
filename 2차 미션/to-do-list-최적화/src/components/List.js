//rfc 함수형 컴포넌트
import React from 'react'

export default function List({todoData, setTodoData}) {

  const btnStyle = {
    color: "gray",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    float: "right",
  };
  
  const completedChange = (key) => {
    let newTodoData = todoData.map(data => {
      if(data.id === key){
        data.completed = !data.completed;
      }
      return data;
    })
    setTodoData(newTodoData);
  };
  const getStyle = (completed) => {
    return{
      padding: "10px",
      borderBottom: "1px #EFF4E7 solid",
      textDecoration: completed ? "line-through" : "none",
      verticalAlign: 'middle',
    }
  };
  const deleteClick = (key) => {
    let newTodoData = todoData.filter(data => data.id !== key);
    setTodoData(newTodoData);
  };
  const inputStyle = {
    verticalAlign: 'middle'
  }



  return (
    <div>
      {todoData.map((data) => (
          <section style={getStyle(data.completed)} key={data.id}>
            <input type="checkbox" defaultChecked={false} style={inputStyle} onChange = {() => completedChange(data.id)}/>
            {data.title}
            <button style={btnStyle} onClick={() => deleteClick(data.id)}>✖</button>
          </section>
          ))}
    </div>
  )
}
