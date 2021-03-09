// React
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './assets/css/index.css';

// React Components
import App from './App';
import Signin from './components/Signin';
import Signup from './components/Signup';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage'

// RouterDOM
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'

// Font-awesome
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';




const Root = () => (
    <Router>
        <React.Fragment>
                <Switch>
                    <Route component={App} exact path="/" />
                    <Route component={Signin} path="/signin" />
                    <Route component={Signup} path="/signup" />
                    <Route component={HomePage} path = "/home" />
                    <Route component={ProfilePage} path='/profile' />
                </Switch>
        </React.Fragment>
    </Router>
  )
  
  

  
  ReactDOM.render(<Root/>,document.getElementById('root'));