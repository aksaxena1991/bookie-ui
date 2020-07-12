import React, { Component } from 'react';
// import logo from './logo.svg';
import M from 'materialize-css';
import LandingPage from './components/pages/landingPage';
import MainPage from './components/pages/mainPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link,
    // Redirect,
    // useHistory,
    // useLocation
  } from "react-router-dom";
  
import './App.css';

class App extends Component {
    componentDidMount(){
        M.AutoInit();
    }
    render(){
        return (  
            <React.Fragment>
                <Router>
          
                    <Switch>
                    <Route path="/" exact component={LandingPage}>
                        
                    </Route>
                    <Route path="/main" exact component={MainPage}>
                        
                    </Route>
                    </Switch>
          
        </Router>
            
            </React.Fragment>
        );
    }
}

export default App;