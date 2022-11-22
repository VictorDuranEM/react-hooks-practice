import { useDeferredValue, useMemo } from "react";

export default function DeferredList({ input }) {
  const LIST_SIZE = 20000;
  const deferredInput = useDeferredValue(input);
  const list = useMemo(() => {
    const newList = [];
    for(let i = 0; i < LIST_SIZE; i++) {
      newList.push(<div key={i}>{input}</div>)
    }
    return newList;
  }, [deferredInput])  

  return list
}