import React from 'react'
import { useForm } from '../hooks/useForm'


export const TodoAdd = ({ onNewTodo }) => {

    const { formValue, onInputoChange, OnResetForm } = useForm({
        formValue: ''
    })

    const onFromSubmit = (event) => {
        event.preventDefault()
        if (formValue.length <= 1) return

        const newTodo = {
            id: new Date().getTime(),
            description: formValue,
            done: false
        }

        onNewTodo(newTodo)
        OnResetForm()
    }

    return (
        <>
            <form onSubmit={onFromSubmit}>
                <input type="text"
                    placeholder="Que hay que hacer?"
                    className="form-control"
                    name='formValue'
                    value={formValue}
                    onChange={onInputoChange}
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1">Agregar</button>
            </form>
        </>

    )
}
