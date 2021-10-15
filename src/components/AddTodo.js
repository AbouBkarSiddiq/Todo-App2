import React,{ useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { AddTodoAction, DeleteTodoAction } from '../redux/actions/todoActions'

const AddTodo = () => {
  
  const todos = useSelector((state) => state.addTodoReducer.list)
  const dispatch = useDispatch()
  const [todo, setTodo] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setTodo("")
  }

  return (
    <>
    <form onSubmit={e => {handleSubmit(e)}}>
      <input
      style={{ padding: '12px', width: '40%' }} 
       type="text" 
       value={todo}
       placeholder="Add a new todo"
       onChange={(e) => setTodo(e.target.value)}
       />
       <button style={{padding: '12px', marginLeft: '10px'}} onClick={() =>dispatch(AddTodoAction(todo))}>+</button>
    </form>
    {/* {JSON.stringify(todos)} */}
    {
     todos.map((todo) => {
      return (
    <div key={todo.id}> 
      {todo.data}
      <button onClick={() =>dispatch(DeleteTodoAction(todo.id))}>Delete</button>
    </div>
      )
      })}
    </>
  )
}

export default AddTodo
