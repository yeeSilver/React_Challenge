//rfc 함수형 컴포넌트 rafc 에로우펑션
import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import Item from './Item';


 const List = React.memo(({todoData, setTodoData, deleteClick}) => {
  console.log('List 컴포넌트');
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
                    <Item 
                      key={data.id}
                      id={data.id}
                      title={data.title}
                      completed={data.completed}
                      todoData={todoData}
                      setTodoData={setTodoData}
                      provided={provided}
                      snapshot={snapshot}
                      deleteClick={deleteClick}
                    />
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
});

export default List;