import React from 'react'

const ButtonComponent = () => {
    const clickHandler = () => {
        window.alert('Button Clicked!');
    };
  return (
    <div className="bg-emerald-700 py-5 px-12 text-center mb-2">
      <h1 className="text-2xl mb-5">Button Component</h1>
      <button className="bg-blue-500 py-3 px-7 text-white cursor-pointer rounded-sm" onClick={clickHandler}>Click Me</button>
    </div>
  )
}

export default ButtonComponent
