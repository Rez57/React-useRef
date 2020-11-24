import React, {useRef, useState, useEffect} from 'react'

const Input2 = () => {

    const [name, setName] = useState(null)
    const [count, setCount] = useState(null)

    const usernameref = useRef(null)

    const handleClick = () => {
        setName(usernameref.current.value)
    }

    useEffect( () => {
        usernameref.current = setInterval(() => {
            setCount((prevcount) => {
                return prevcount+1
            })
        }, 1000)
    },[])
    
 
    

    const stopcount = () => {
        clearInterval(usernameref.current)
    }
    return (
        <div>
            <input ref={usernameref} type="text"/>
            <button onClick={handleClick} value={name}>focus2</button>
            <br/><br/>
            {count}
            <br/>
            <button onClick={stopcount}>stop !!</button>
    
        </div>
    )
}

export default Input2
