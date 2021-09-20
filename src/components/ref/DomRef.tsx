import { useRef, useEffect } from 'react'

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        inputRef.current.focus()
    },[])

    return (
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
}


// Not hull assertion, (null!) allows us to call focus without optional chaining