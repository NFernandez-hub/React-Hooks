import { useMemo, useState } from 'react'
import { useCounter } from '../hooks'

const heaveStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos')
    }

    return `${iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(2000)
    const [show, setShow] = useState(true)

    const memorizedValue = useMemo(() => heaveStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />

            <h4>{memorizedValue}</h4>

            <button
                className="btn btn-primary"
                onClick={() => increment()}> +1 </button>

            <button className='btn btn-outline-primary'
                onClick={() => setShow(!show)}>
                show/Hide {JSON.stringify(show)}</button>

        </>
    )
}
