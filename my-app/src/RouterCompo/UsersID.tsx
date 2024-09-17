import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { IUsers } from '../Modules/IUsers'
import { UsersService } from '../Services/UsersService'



interface Iparam {
    id: string
}

interface IState {
    loading: boolean,
    user: IUsers,
    errormsg: string
}

const UsersID: React.FC = () => {
    const [state, setState] = useState<IState>({
        loading: false,
        user: {} as IUsers,
        errormsg: ' '
    });
    useEffect(() => {
        //getting data frm API  
        if (id) {
            setState({
                ...state, loading: true
            })
            UsersService.getUser(id)
                .then(res => setState({
                    ...state, loading: false, user: res.data
                }))
                .catch(err => setState({
                    ...state, loading: false, errormsg: err.message
                }))
        }

    }, [])

    //any means k iska type number hoga ya any kuch bhi hoga
    const { id } = useParams<Iparam | any>()
    const { loading, user, errormsg } = state
    return (
        <>
            <div className="container">
                <h1>Single User Details Page</h1>
                <h3>User ID : <span className='font-weight-bold'> {id}  </span> </h3>

                <div className="row">
                    {
                        loading && <h1>Loading....</h1>
                    }
                    {
                        errormsg && <h1>{errormsg}</h1>
                    }

                    {
                        Object.keys(user).length > 0 && (
                            <div className="row">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Name : <b>{user.name}</b>
                                    </li>
                                    <li className="list-group-item">
                                        UserName : <b>{user.username}</b>
                                    </li>
                                    <li className="list-group-item">
                                        phone No : <b>{user.phone}</b>
                                    </li>
                                    <li className="list-group-item">
                                        Email : <b>{user.email}</b>
                                    </li>
                                    <li className="list-group-item">
                                        Company : <b>{user.company.name}</b>
                                    </li>
                                    <li className="list-group-item">
                                        Address : <b>{user.address.city}</b>
                                    </li>
                                </ul>
                            </div>
                        )
                    }



                </div>
                <div>
                    <Link to={"/"}><button className='btn btn-success mt-3'>Go Back</button></Link>
                </div>



            </div>
        </>
    )
}

export default UsersID
