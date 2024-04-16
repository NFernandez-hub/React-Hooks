import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    const { username, email, password, onInputoChange, OnResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })

    return (
        <>
            <h1>Formulario con custom hook</h1>
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

            <input type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputoChange}
            />

            <button onClick={OnResetForm}
                className="btn btn-primary mt-2">Borrar</button>
        </>
    )
}
