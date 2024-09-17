import React, { useState, useEffect } from 'react'
import { IUsers } from '../Modules/IUsers'
import { UsersService } from '../Services/UsersService'
import { Link } from 'react-router-dom'


interface IState {
    loading: boolean,
    users: IUsers[],
    errorMsg: string
}
const Users: React.FC = () => {
    const [state, setState] = useState<IState>({
        loading: false,
        //ye mai batarahi hu k data jo bhi recive hoga woh users se IUsers hoga
        users: [] as IUsers[],
        errorMsg: " "
    })

    //network request

    useEffect(() => {
        setState({
            ...state, loading: true
        })
        UsersService.getAllUser()
            .then(res => setState({
                ...state, loading: false, users: res.data
            }))
            .catch(err => setState({
                ...state, loading: false, errorMsg: err.message
            }))

    }, [])

    const { loading, users, errorMsg } = state
    return (
        <>
            <div className='container'>

                <h1>Data From Api</h1>
                {
                    errorMsg && (<p>{errorMsg}</p>)
                }
                {
                    loading && <h1>Loading....</h1>
                }
                <table className='table table-hover'>
                    <thead >
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>UserName</td>
                            <td>Email</td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length > 0 && users.map(user => (
                                <tr key={user.id}>

                                    <td>{user.id}</td>
                                    <td><Link to={`users/${user.id}`} className='text-decoration-none'>{user.name}</Link></td>
                                    <td>{user.username}</td> 
                                    {/* <td><Link to={`users/${user.username}`} className='text-decoration-none'>{user.username}</Link></td> */}
                                    <td>{user.email}</td>


                                </tr>
                            ))
                        }
                    </tbody>
                </table>





            </div>
        </>
    )
}

export default Users
