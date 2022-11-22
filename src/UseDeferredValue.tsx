import { useState } from "react"
import DeferredList from "./DeferredList";

export default function App() {
  const [input, setInput] = useState('');
  
  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleChange}/>
      <DeferredList input={input}/>
    </div>
  )
}