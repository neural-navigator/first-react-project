import React from 'react'


function FunctionClick() {
    function clickHandler(){
        console.log("clicked!");
    }
  return (
    <div>
      <button onClick={clickHandler}>Click Me!</button>
    </div>
  )
}

export default FunctionClick;
