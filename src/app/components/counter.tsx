'use client';
import { useState } from "react";


export const Counter = () => {
  const [count, setCount] = useState(0)
  console.log(count)
  return(
    <button onClick={()=> setCount(count+1)}>Clicked {count} times</button>
  )
};