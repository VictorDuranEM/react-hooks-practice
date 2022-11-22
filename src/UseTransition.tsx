import { useState, useTransition } from "react";

export default function App() {

  const COUNT = 20000;


  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const [isPending, startTransition] = useTransition();


  function handleChange(e) {
    setInput(e.target.value);

    startTransition(() => {
      const newItems = [];
      for (let index = 0; index < COUNT; index++) {
        newItems.push(e.target.value);
      }
      setItems(newItems);
    })
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {isPending ? "Loading..." : items.map((item, index) => {
        return <div key={index}>{item}</div>
      })}
    </div>
  )
}