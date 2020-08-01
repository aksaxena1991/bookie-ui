
import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
const RegisterPage = React.lazy(() => import('../registerPage/registerPage'));
const MainPage = React.lazy(()=> import('../mainPage/mainPage'));
const LoginPage = React.lazy(() => import('../loginPage/loginPage'));
function LandingPage(){
    return(
        <div className="landingPage">
           
           <Router>
              <Suspense fallback={<div>Loading..........</div>}>
                <Switch>
                <Route path="/login" component = {LoginPage} />
                <Route path="/register" component = {RegisterPage} />
                <Route path="/main" component = {MainPage} />
                <Route path="/">
                    <Redirect to="/login" />
                </Route>
                </Switch>
            </Suspense>
            </Router>

           
        </div>
    );
}
export default LandingPage;