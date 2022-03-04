import React, {Component} from "react";
import "./App.css";
//리액트 라이브러리에서 컴포넌트를 가져와서 사용할 수 있게 extends를 해 줌. 이걸 가져와서 render 메소드를 쓸 수 있음 

//클래스형 - render메소드를 써야 함.
export default class App extends Component {

  state = {
    todoData : [],
    value: ""
  }

  btnStyle = {
    color: "gray",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    float: "right",
  }

  getStyle = (completed) => {
    return{
      padding: "10px",
      borderBottom: "1px #EFF4E7 solid",
      textDecoration: completed ? "line-through" : "none",
      verticalAlign: 'middle',
    }
  }

  inputStyle = {
    verticalAlign: 'middle'
  }

  deleteClick = (key) => {
    let newTodoData = this.state.todoData.filter(data => data.id !== key);
    this.setState({todoData: newTodoData});
  }

  printClick = (e) => {
    //e는 내가 입력하고 있는 정보들을 담고 있음.
    console.log('e', e.target.value); 
    this.setState({ value: e.target.value }); // 입력한 걸 input 안에 출력해줌.
  }

  addClick = (e) => {
    e.preventDefault(); //버튼 클릭시 리로드 되지 않게 하기 위함.

    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false
    }

    this.setState({ todoData: [...this.state.todoData, newTodo], value: ""});
  }

  completedChange = (key) => {
    let newTodoData = this.state.todoData.map(data => {
      if(data.id === key){
        data.completed = !data.completed;
      }
      return data;
    })
    this.setState({ todoData: newTodoData })
  }

  render() {
    return (
      <div className="container">
        <main className="todoBox">
          <h1>
            💡 To Do List 💡
          </h1>

          {this.state.todoData.map((data) => (
/*key={data.id} 왜 넣어야 할까?
넣지 않는다면 Each child in a alist should have a unique "key" prop 이라는 error가 뜸.
key를 이용해야지 list에서 어떤 부분이 변경됐는 지 찾아서 실제 돔에 적용해줌. key 안쓰면 새로 추가된 요소만 돔에 적용하는 게 아니라 모두 다시 다 적용함. 
*/
          <section style={this.getStyle(data.completed)} key={data.id}>
            <input type="checkbox" defaultChecked={false} style={this.inputStyle} onChange = {() => this.completedChange(data.id)}/>
            {data.title}
            <button style={this.btnStyle} onClick={() => this.deleteClick(data.id)}>✖</button>
          </section>
          ))}

          <form style={{display: "flex", marginTop: "10px"}} onSubmit={this.addClick}>
            <input 
              type = "text"
              name = "value"
              style = {{ flex: "15", padding: "5px", border: "none"}}
              placeholder = "어떤 할 일이 있으신가요?"
              fontFamily = "font-family: 'Hahmlet', serif;"
              value = {this.state.value}
              onChange={this.printClick}/>

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
}
