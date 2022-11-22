import { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTION = {
  CREATE: 'create',
  TOGGLE: 'toggle',
  DELETE: 'delete'
}

export default function App() {
  
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({type: ACTION.CREATE});
  }

  function reducer(todos, action) {
    switch (action.type) {
      case ACTION.CREATE:
        return [...todos, newTodo(value)]
      case ACTION.TOGGLE:
        return todos.map(todo => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo)
      case ACTION.DELETE:
        return todos.filter(todo => todo.id !== action.payload.id)
      default:
        return todos;
    }
  }

  function newTodo(value) {
    return { id: Date.now(), value: value, completed: false }
  }


  const [value, setValue] = useState('');
  const [todos, dispatch] = useReducer(reducer, [])
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      {todos.map(todo => <Todo key={todo.id} todo={todo} dispatch={dispatch} />)}
    </form>
  )
}