import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Button Clicked')
    }
    function overClicked() {
        console.log('Ma te mi pa naw')
    }
    return (
        <div>
            <button onDoubleClick={overClicked} onClick={clickHandler}>Click</button>
        </div>
    )
}
export default FunctionClick