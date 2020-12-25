import * as React from "react";
import MainPage from "./Pages/MainPage";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CRUDPage from "./Pages/CRUDPage";
import Stress from "./Pages/Stress";
import ManageTime from "./Pages/TimeArticle";
import GoalsArticle from "./Pages/GoalsArticle";
import RankingPage from "./Pages/RankingPage";

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
                    <Route exact path="/dashboard/crudcard"  component={CRUDPage}/>
                    <Route exact path="/dashboard/ranking" component={RankingPage}/>
                    <Route exact path="/MainPage"  component={MainPage}/>
                    <Route exact path="/Stress" component={Stress}/>
                    <Route exact path="/ManageTime" component={ManageTime}/>
                    <Route exact path="/GoalsArticle" component={GoalsArticle}/>
                </Switch>
            </Router>
        </div>
    );
};

export { App }
