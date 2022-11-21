import { useEffect, useRef, useState } from "react"

export default function App() {
  const [name, setName] = useState('');
  const renderCount = useRef(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const prevName = useRef('');

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log(renderCount.current)
    console.log('Running useEffect for render count update')
  })

  useEffect(() => {
    prevName.current = name;
    console.log('Running useEffect for prevName update');
  }, [name])

  function focus() {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }

  return (
    <>
      { console.log('Returning component contents') }
      <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name} and it used to be {prevName.current}</div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus</button>
    </>
  )
}