import React from 'react'

//use-state
import { useState ,useEffect } from 'react'
import { Button } from 'react-bootstrap';

const UseStateTest = () => {


  //useState
  const [count , setCount] = useState(0);
    
//useEffect
  useEffect(() => {
    console.log(count)
  } , [
    count
  ]);
  
  return (
    
    <div className='container mt-5 p-5 text-bg-light rounded w-50'>
       <p> {count}</p>
      <Button className='mx-2' onClick={() => {setCount(count + 1)}}> +</Button>
      <Button onClick={()=>{setCount(count - 1)}}>-</Button>




    </div>
  )
}

export default UseStateTest