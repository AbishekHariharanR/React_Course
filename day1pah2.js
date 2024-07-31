import React from 'react' 

const Day1pah2 = () => {

    let age = 18;
    let name = 'kiran'
    let setStatus = false
    let userDefault = undefined
    let responseValue = null


    const printValue = () => {
        alert("check the console output!")
        console.log(age)
        console.log(name)
        console.log(setStatus)
        console.log(userDefault)
        console.log(responseValue)
        age = 25
        setStatus = true
        console.log(age)
        console.log(name)
    }

    return (
        <>
        <h1>Primitive Data Type copy the Values</h1>
        <input type='submit' onClick={() => printValue}></input>
        </>
    )
}

export default Day1pah2