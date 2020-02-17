import React from "react"

import ToDos from "./toDolist"
import toDoData from "./toDo"
import './App.css'

class  App extends React.Component {
  constructor(){
      super()
      this.state={
          todos:toDoData
      }
      this.handleChange=this.handleChange.bind(this)
  }
  
  handleChange(h){

    this.setState(prev=>{
        const result=prev.todos.map( todo=>{
            if (todo.id===h){
                todo.completed=!todo.completed
            }
            return todo
        })
        return{
            todos:result
        }

    })

  }


  


  render(){
    const toDo = this.state.todos.map(to => <ToDos  key={to.id} item={to} handleChange={this.handleChange} />)
    
    
    return (
        <div className="todo-list">
            {toDo}            
        </div>
    )
    }
}

export default App