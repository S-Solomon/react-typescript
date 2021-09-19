type InputProps = {
    value: string
    handleChange:  (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ value, handleChange}: InputProps) => {
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(event)
    // }
    return <input type='text' value={value} onChange={handleChange = (event) => console.log(event)}/>
}

// we destructure props into value & handlechange
// so we don't have to say 'props.value', or 'props.handleChange'