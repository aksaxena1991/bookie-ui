import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

const LandingPage = React.lazy(()=> import('./components/pages/landingPage/landingPage'));
function App() {
  console.log(window.M);
  return (
    <Router>
    <Suspense fallback={<div>Loading..........</div>}>
      <Switch>
      <Route path="/" component = {LandingPage} />
      
      </Switch>
   </Suspense>
   </Router>
    
  );
}

export default App;
