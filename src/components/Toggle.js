import React from "react"
import React, from "react" { useState } from "react"

function Toggle() {
  const [isOn, setIsOn] = useState(false)

  function handleClick(){
    setIsOn((isOn) => !isOn)
  }

  const color = isOn ? "red" : "White"

  return <button style={{ backgroung : color }} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
  
}

export default Toggle;
