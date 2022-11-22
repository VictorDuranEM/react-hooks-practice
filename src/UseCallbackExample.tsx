import { useCallback, useState } from "react"
import List from "./List";

export default function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback((count: number) => {
    return [number + count, number + 1 + count, number + 2 + count];
  }, [number]);

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  )
}