import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import CreateAccount from './component/CreateAccount/CreateAccount';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import CheckOut from './component/CheckOut/CheckOut';
import Admin from './component/Admin/Admin';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    password: '',
    confPassword: ''
  })
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>   
         
        <Switch>        
          
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/createAccount">
            <CreateAccount></CreateAccount>
          </Route>
          <PrivateRoute path="/orders">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>

          

        </Switch>
        
    </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
