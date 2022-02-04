import React from 'react';
import Resturant from "./component/Basics/Resturant";
import Login from "./component/Forms/Login";
import MutipleInputs from "./component/Forms/mutipleInputs";
// import "./component/Basics/style4.css";
// import React from 'react';
import Remedies from './component/Basics/remedies';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MutipleInputs/>
        </Route>
        <Route exact path="/Login">
          <Login/>
        </Route>
        <Route exact path="/Resturant">
          <Resturant/>
        </Route>
        <Route exact path="/Remedies">
          <Remedies/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
// const App = () => {
//   return (
//     <>
//      <Remedies/>
//     </>
    
//   );
// };

// export default App;
