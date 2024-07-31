import React from 'react'

const Day1ce1 = () => {

  const alertF = () => {
     alert("Message from Javascript Alert!")
     console.log("Message to developer")
  }  

  return (
    <>
        <h1>Let we see the output of JAVASCRIPT</h1>
        <input type='submit' onClick={alertF}></input>
    </> 
  )
}

export default Day1ce1