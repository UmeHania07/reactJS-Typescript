import React, { useState } from 'react'



interface Istate {
    count: number
}


const Counter: React.FC = () => {
    const [counter, setCounter] = useState<Istate>({ count: 0 })

    const handleIncre = () => {
        setCounter({ count: counter.count + 1 })
        console.log(counter)
    }
    const handleDecre = () => {
        setCounter({ count: counter.count - 1 })
        console.log(counter)
    }
    return (
        <>
            <h1>Event Handling</h1>
            <div className="row ms-5">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card body">
                            <h2 className='display-3'>{counter.count}</h2>
                            <button className='btn btn-success' onClick={handleIncre}>INC</button>
                            <button className='btn btn-danger' onClick={handleDecre}>DEC</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
