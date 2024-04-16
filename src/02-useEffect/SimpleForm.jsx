import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'fernando@gmail.com'
    })

    const { username, email } = formState

    const onInputoChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log('useEffect called!')
    }, [])

    useEffect(() => {
        // console.log('formState Change!')
    }, [formState])

    useEffect(() => {
        // console.log('email Change!')
    }, [email])



    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputoChange}
            />

            <input type="email"
                className="form-control mt-2"
                placeholder="Nicolas@gmail.com"
                name="email"
                value={email}
                onChange={onInputoChange}
            />

            {
                (username === 'strider2') && <Message />
            }
        </>
    )
}
