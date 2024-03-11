import React, {useState} from 'react'


const Counter = () => {

  const[count, setCount] = useState(0);

  const increment = () => {
        setCount(c => c + 1);
  }

  const decrement = () => {
    setCount(c => c - 1);
}

const reset = () => {
    setCount(0);
}
 
  
  return (
    <>
        <div className='counter-container'>
            <p className='count-display'> {count}</p>
            <button className = 'counter-button' onClick={increment}>Increment</button>
            <button className = 'counter-button' onClick={decrement}>Decrement</button>
            <button className = 'counter-button' onClick={reset}>Reset</button>
        </div>
    </>
  )
}

export default Counter