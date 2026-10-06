import React from 'react'

const MyButton = () =>{
    const handleClick = () =>{
        alert('Button Clicked')
    }
    return (
        <button onClick={handleClick}>Click Me</button>
    )
}

const Event = () => {
  return (
    <div>
        <MyButton/>
    </div>
  )
}

export default Event