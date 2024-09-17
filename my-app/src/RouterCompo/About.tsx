import React, { useState } from 'react'

interface Istate {
    message: string
}

const About: React.FC = () => {
    const [state, setState] = useState<Istate>({ message: "Welcome" })

    const handleRead = (greet: string) => {
        setState({ message: greet })
    }



    return (
        <>
            <div>

                <div className="row">
                    <div className="col-md-6 ">
                        <div className="card mt-4">
                            <div className="car-body ">
                                <h1 className='m-3'>{state.message}</h1>
                                <button className='btn btn-success ' onClick={() => handleRead("Like")}>Like</button>
                                <button className='btn btn-primary ms-2' onClick={() => handleRead("Comment")}>Comment</button>
                                <button className='btn btn-danger ms-2' onClick={() => handleRead("Subscribe")}>Subscribe</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About

