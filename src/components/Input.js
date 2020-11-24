import React, { useRef} from 'react'

const Input = () => {

    const usernameRef = useRef(null)

    const handleclick = () => {
        usernameRef.current.focus()
    }
    return (
        <div>
            <input ref={usernameRef} type="text"/>
            <button onClick={handleclick}>focus</button>
        </div>
    )
}

export default Input
