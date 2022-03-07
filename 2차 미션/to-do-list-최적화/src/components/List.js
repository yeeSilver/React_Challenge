//rfc 함수형 컴포넌트
import React from 'react'

export default function List({todoData, setTodoData}) {

  const completedChange = (key) => {
    let newTodoData = todoData.map(data => {
      if(data.id === key){
        data.completed = !data.completed;
      }
      return data;
    })
    setTodoData(newTodoData);
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
          <article key={data.id}>
            <div className='flex items-center justify-between w-full px-4 py-1 my-2  border-white border-2 rounded'>
              
              <div className='items-center'>
                <input type="checkbox" defaultChecked={false} style={inputStyle} onChange = {() => completedChange(data.id)}/>
                <span className= {data.completed ? "line-through" : undefined}>
                  {data.title}
                </span>
              </div>

              <div className='items-center p-2 rounded cursor-pointer hover:bg-red-200'>
                <button onClick={() => deleteClick(data.id)}>✖</button>
              </div>

            </div>
          </article>
          ))}
    </div>
  )
}
