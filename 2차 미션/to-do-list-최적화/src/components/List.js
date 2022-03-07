//rfc 함수형 컴포넌트
import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';

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

  const handleEnd = (result) => {
    // result에는 source항목(원래 있던 곳)과 드레그 이벤트에 대한 정보가 있음. 
    if(!result.destination) return;
    const newTodoData = todoData;

    /* 1. 변경시키는 아이템을 배열에서 지워준다.
       2. return 값으로 지워진 아이템을 잡아준다.*/
    const [reorderedItem] = newTodoData.splice(result.source.index, 1);

    //원하는 자리에 reorderedItem을 insert해준다.
    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodoData);
  }

  return (
    <div>
      {/* onDragEnd는 드래그 드랍했을때 순서를 바뀌게 함. onDragEnd할 때 handleEnd함수를 실행.*/}
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId='todo'>
          {(provided) => (
            // Droppable을 사용해서 Droppable에서 주는 정보를 div에 전달. 
            <div {...provided.droppableProps} ref={provided.innerRef}>
            {todoData.map((data,index) => (
              <Draggable 
                key={data.id}
                draggableId={data.id.toString()}
                index={index}
              >    
              {(provided, snapshot) => (
                <article 
                  key={data.id} 
                  {...provided.draggableProps} 
                  ref={provided.innerRef}
                  {...provided.dragHandleProps}
                  className={`${snapshot.isDragging ? "bg-white": undefined} flex items-center justify-between w-full px-4 py-1 my-2  border-white border-2 rounded`}
                >
                    <div className='items-center'>
                      <input type="checkbox" defaultChecked={false} style={inputStyle} onChange = {() => completedChange(data.id)}/>
                      <span className= {data.completed ? "line-through" : undefined}>
                        {data.title}
                      </span>
                    </div>

                    <div className='items-center p-2 rounded cursor-pointer hover:bg-red-200'>
                      <button onClick={() => deleteClick(data.id)}>✖</button>
                    </div>


                </article>
              )}
            </Draggable>
          ))}
          {/* provide.placeholder는 element를 드래그해서 위로 올릴 수 있게 함.*/}
          {provided.placeholder}
          </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
