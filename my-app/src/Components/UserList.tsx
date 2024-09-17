import React, { useState } from 'react'
import { IUserList } from '../Modules/IUserList'
import { UserService } from '../Services/UserService'

interface Istate {
    //ye mai userlist ko iski type bata rahi hu k yahan array list h []
    userList: IUserList[]
}

const UserList: React.FC = () => {
    const [state, setState] = useState<Istate>({
        userList: UserService.getAllUser()


    })
    return (
        <>
            <div className="container">
                <div className="row w-50 mt-5 m-auto">
                    <h1>Looping / iteration</h1>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">sno</th>
                                <th scope="col">FirstName</th>
                                <th scope="col">Age</th>

                            </tr>
                        </thead>
                        <tbody>

                            {state.userList.length > 0 &&
                                state.userList.map(user => (
                                    //map mai unique key kuch bhi deskhty hn
                                    <tr key={user.sno}>
                                        <td>{user.sno}</td>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>

                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UserList
