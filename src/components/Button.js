import React,{useState} from 'react'

const Button =() => {
  const initialCount = 0;
  const [count,setCount] = useState(initialCount);

  const incrementFive = ()=>{
    for (let i = 0; i< 5; i++){
      setCount(prevCount=>prevCount +1)
    }
  }

  return (
    <div>
      <h2 className='display'>Counter: {count}</h2>
      <div className='btnContainer'>
         <button className='btn'onClick={()=>setCount(initialCount)}>Reset</button>
         <button className='btn'onClick={()=>setCount(count +1)}>Increment</button>
         <button className='btn'onClick={()=>setCount(count -1)}>Decrement</button>
         <button className='btn'onClick={incrementFive}>Increment Five</button>
      </div>
    </div>
    
  ) 
}

export default Button
