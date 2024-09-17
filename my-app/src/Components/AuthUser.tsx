import React, { useState } from 'react'


interface Istate {
  isLogin: boolean
}
const AuthUser: React.FC = () => {

  //first login false hoga ek click pe wo true hoga
  const [state, setState] = useState<Istate>({
    isLogin: false
  })

  const Login = () => {
    setState({
      isLogin: true
    })
    console.log(state.isLogin)
  }

  const LogOut = () => {
    setState({
      isLogin: false
    })
    console.log(state.isLogin)
  }
  return (
    <>
      <div className='container card p-4 mt-4'>
        <div className="row">
          <div className="col-md-12">

            {state.isLogin && state.isLogin ?
              (<h1>WelCome User..</h1>) : (<h1>Please Login Here</h1>)}

            {state.isLogin && state.isLogin ?
              (<button className="btn btn-danger ms-3" onClick={LogOut}>Logout</button>) : (<button className="btn btn-primary" onClick={Login}>Login</button>)}



          </div>
        </div>
      </div>
    </>
  )
}

export default AuthUser
