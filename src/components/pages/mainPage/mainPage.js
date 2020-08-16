import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// const Topbar = React.lazy(() => import("../../molecules/topbar/topbar"));
const PrimaryLeftbar = React.lazy(() => import("../../molecules/primaryLeftbar/primaryLeftbar"));
const Dashboard = React.lazy(() => import("../../organisms/dashboard/dashboard"));

function MainPage(){
    return(
        <div className="mainPage">
            <PrimaryLeftbar/>
            
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