import React from 'react';

import './App.css';
import Home from './component/Home'
import Login from './component/Login'

import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    window.localStorage.getItem('username')
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function App() {
  return (
    <>
    <div   className='px-lg-5 ' >
      <Router>
        <Switch>
          
            <PrivateRoute exact path="/" component={Home}/>
            <Route path='/login' component={Login}/>

        </Switch>
      </Router>
    
    </div>
   
    </>
  );
}

export default App;
