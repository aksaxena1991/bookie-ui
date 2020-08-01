import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const Topbar = React.lazy(() => import("../../molecules/topbar/topbar"));
const Dashboard = React.lazy(() => import("../../organisms/dashboard/dashboard"));

function MainPage(){
    return(
        <div className="mainPage">
            <Topbar/>
            <Router>
              <Suspense fallback={<div>Loading..........</div>}>
                <Switch>
                <Route path="/main/dashboard" component = {Dashboard} />
                
                </Switch>
            </Suspense>
            </Router>
        </div>
    );
}
export default MainPage;