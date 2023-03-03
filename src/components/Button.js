import React,{useState} from 'react'

const Button =() => {
  const initialCount = 0;
  const [count,setCount] = useState(initialCount);
  return (
    <div>
      <h2 className='display'>Counter - {count}</h2>
      <div className='btnContainer'>
         <button className='btn'onClick={()=>setCount(initialCount)}>Reset</button>
         <button className='btn'onClick={()=>setCount(count +5)}>Increment</button>
         <button className='btn'onClick={()=>setCount(count -5)}>Decrement</button>
      </div>
    </div>
    
  )
}

export default Button
