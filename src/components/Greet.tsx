type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props //destructure messageCount from props and assign a default value of zero
    return (
        <div>
            <h2>
            {
                props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount} unread messages` : 'Welcome Guest' 
            }
            </h2>
        </div>
    )
}