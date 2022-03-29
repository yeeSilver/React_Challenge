import React, {useState} from 'react'

const Item = React.memo(({ id, title, completed, todoData, setTodoData, provided, snapshot, deleteClick}) => {
  //수정 state
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  //수정하기
  const editChange = (e) => {
    setEditedTitle(e.target.value);
  }

  //수정된 내용 적용
  const editSubmit = () => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.title = editedTitle;
      }
      return data;
    });

    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
    setEditing(false); //이거 수저하는 폼 false임
  };

  //할 일 완료 체크
  const completedChange = (id) => {
    let newTodoData = todoData.map(data => {
      if(data.id === id){
        data.completed = !data.completed;
      }
      return data;
    })
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
  };

 
  const inputStyle = {
    verticalAlign: 'middle'
  }; 

  if(editing){
    return (
      <article className="flex items-center justify-between w-full px-4 bg-yellow-500  py-1 my-2 border-none shadow-md rounded">
        <div className="items-center">
          <form onSubmit={editSubmit}>
            <input
              className="w-full text-gray-500 px-4 py-1 my-2 bg-none "
              value={editedTitle}
              onChange={editChange}
              autoFocus
            />
          </form>
        </div>
        <div>
          <button
            type="button"
            className="p-2 float-right cursor-pointer hover:scale-125"
            onClick = {() => {
              setEditing(false);
            }
            } 
          >✖</button>
          <button
            type="button"
            className="p-2 float-right cursor-pointer hover:scale-125"
            onClick={editSubmit}
          >📥</button>
        </div>
      </article>
    );
  }else{
      return(
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

            <span className= {`${completed ? "line-through" : undefined} ml-2`}>
              {title}
            </span>
          </div>

          <div className='items-center'>
            <button className="cursor-pointer hover:scale-125 float-right p-2" onClick={() => deleteClick(id)}>🗑️</button>
            <button className="cursor-pointer hover:scale-125 float-right p-2" onClick={() => setEditing(true)}>✍</button>
          </div>
        </article>
      )};
});

export default Item