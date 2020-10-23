import * as React from "react";
import MainPage from "./Pages/MainPage";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/"  component={MainPage}/>
                    <Route exact path="/dashboard"  component={Dashboard}/>
                    <Route exact path="/dashboard/profile"  component={Profile}/>
                    
                </Switch>
            </Router>
        </div>
    );
};

export { App }
