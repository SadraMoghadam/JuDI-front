import * as React from "react";
import MainPage from "./Pages/MainPage";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/"  component={MainPage}/>
                    <Route exact path="/login"  component={Login}/>
                    <Route exact path="/register"  component={Register}/>
                    <Route exact path="/dashboard"  component={Dashboard}/>
                    <Route exact path="/dashboard/profile"  component={Profile}/>
                    <Route exact path="/MainPage"  component={MainPage}/>
                </Switch>
            </Router>
        </div>
    );
};

export { App }
