import React, { useState } from 'react'
import { Ilogin } from '../Modules/Ilogin'

interface Istate {
    user: Ilogin
}
const Login: React.FC = () => {
    const [state, setState] = useState<Istate>({
        user: {
            email: " ",
            password: " "

        }
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            user: {
                ...state.user,
                [e.target.name]: e.target.value
            }

        })
        //   console.log(state.user)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(state.user)
        alert("Login Successfully")
    }

    return (
        <>
            <div className='container'>
                <h1>Login Form..</h1>
                <div className='w-50 m-auto'>
                    <form className='card p-4' onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.user.email} name="email" onChange={handleChange} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" value={state.user.password} name="password" onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                    <div className='mt-4'>
                        {/* mujy user ki details Json format mai chaiyee */}
                        <p>{JSON.stringify(state.user)}</p>

                    </div>


                </div>
            </div>
        </>
    )
}

export default Login
