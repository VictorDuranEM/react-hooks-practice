import { ACTION } from "./UseReducerExample"

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ backgroundColor: todo.completed ? 'black' : 'gray' }}>{todo.value}</span>
      <button type="button" onClick={() => dispatch({ type: ACTION.TOGGLE, payload: { id: todo.id } })}>Toggle</button>
      <button type="button" onClick={() => dispatch({ type: ACTION.DELETE, payload: { id: todo.id } })}>Delete</button>
    </div>
  )
}