import { useEffect, useMemo, useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  // const themeStyles = {
  //   backgroundcolor: dark ? 'black' : 'white',
  //   color: dark ? 'white' : 'black'
  // }
  const themeStyles = useMemo(() => {
    return {
      backgroundcolor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark]);
  
  useEffect(() => {
    console.log("Theme styles updated");
  }, [themeStyles]);

  return (
    <>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

function slowFunction(num: number): number {
  console.log('Calling Slow Function');
  for (let i = 0; i <= 1000000000; i++) { }
  return num * 2;
}


// Two big cases for useMemo
// - To prevent slow functions from running with every re-render
// - To prevent creating new objects with every re-render