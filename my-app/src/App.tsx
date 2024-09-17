import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Customer from './Components/Customer';
import UserClass from './Components/UserClass';
import Counter from './Components/Counter';
import Youtube from './Components/Youtube';
import Login from './Components/Login';
import AuthUser from './Components/AuthUser';
import UserList from './Components/UserList';
import Users from './Components/Users';
import About from './RouterCompo/About';
import LoginRoute from './RouterCompo/LoginRoute'
import Navbar from './RouterCompo/Navbar';
import UsersID from './RouterCompo/UsersID';


function App() {
  // const bg = {
  //   backgroundColor: 'red',
  //   color: 'green'
  // }
  return (
    <>
      <div className="container">

        <Navbar />

        <Routes>

          <Route path='/' element={<Users />} />
          <Route path='/users/:id'element={<UsersID /> }   />
          <Route path='about' element={<About />} />
          <Route path='login' element={<LoginRoute />} />
        </Routes>

      </div >















      {/* <div className="App"> */}
      {/* <h1 style={{color:"blue"}}>React TypeScript..</h1>
      <h1 style={bg}>React TypeScript..</h1> */}

      {/* maine jo index.js main css cdn link lagaya h oski he ye boostrap inline h */}
      {/* <h1 className='bg-dark text-light m-5'>React TypeScripy.. </h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptates. Porro veniam voluptatem autem ab ea velit quaerat cumque. Praesentium optio vel perferendis exercitationem quae consectetur velit, adipisci beatae sit?</p>
     */}



      <div className="row">
        <div className="col-md-6">
          {/* ye function component h */}

          {/* <Customer name="Hania" lastName="Khan" age={18} /> */}
        </div>

        <div className="col-md-6">
          {/* ye class component h */}

          {/* <UserClass userid={1} userName="Hania"/> */}

        </div>
      </div>




      {/* Ye Event Handling h */}

      {/* <Counter /> */}

      {/* Function with parameter */}

      {/* <Youtube /> */}


      {/* handling Form  */}

      {/* <Login /> */}

      {/* conditional rendering */}

      {/* <AuthUser /> */}


      {/* Looping / iteration */}

      {/* <UserList /> */}


      {/* Fetching data from api */}

      {/* <Users /> */}




      {/* </div> */}
    </>
  );
}

export default App;
