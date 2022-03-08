import React from 'react'

const Item = React.memo(({ id, title, completed, todoData, setTodoData, provided, snapshot, deleteClick}) => {
  console.log('아이템 컴포넌트');
  const completedChange = (id) => {
    let newTodoData = todoData.map(data => {
      if(data.id === id){
        data.completed = !data.completed;
      }
      return data;
    })
    setTodoData(newTodoData);
  };

 
  const inputStyle = {
    verticalAlign: 'middle'
  }; 

  return (
    <>
      <article 
        key={id} 
        {...provided.draggableProps} 
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${snapshot.isDragging ? "bg-white": undefined} flex items-center justify-between w-full px-4 py-1 my-2  border-white border-2 rounded`}
      >
        <div className='items-center'>
          <input type="checkbox" onChange = {() => completedChange(id)} defaultChecked={completed} style={inputStyle} />
          {/* defaultchecked가 completed인건 강사님, 나는 false같은데. */}

          {/* <span className= {`${completed ? "line-through" : undefined} ml-2`}> */}
          <span className= {completed ? "line-through" : undefined}> 
            {title}
          </span>
        </div>

        <div className='items-center p-2 rounded cursor-pointer hover:bg-red-200'>
          <button onClick={() => deleteClick(id)}>✖</button>
        </div>
      </article>
    </>
  )
});

export default Item