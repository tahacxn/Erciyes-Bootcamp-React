import React, { useState } from 'react'

function IncreaseDiv() {

    const [size, setSize] = useState(200)

    const increase = () => {
      setSize(size + 100)
    }

  return (
    <>
    <button onClick={increase}>Increase</button>
    <div style={{height: size, width: size, backgroundColor: "black"}}></div>
    </>
  )
}

export default IncreaseDiv