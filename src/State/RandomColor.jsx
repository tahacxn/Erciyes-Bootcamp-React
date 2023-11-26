import React, { useState } from 'react'

function RandomColor() {

    let randomColors = ["red","blue","green","yellow","orange","purple","pink","black","brown","white"]

    const [color,setColor] = useState("black")
    
    const change=()=>{
        let randomIndex = Math.floor(Math.random() * randomColors.length)
        setColor(randomColors[randomIndex])
    }

  return (
    <>

    <button onClick={change}>Change Color</button>
    <div style={{width:200,height:200,backgroundColor:color}}></div>
    </>
  )
}

export default RandomColor