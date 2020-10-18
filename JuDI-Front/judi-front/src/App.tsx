import * as React from "react";
import MainPage from "./Pages/MainPage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/"  component={MainPage}/>
                </Switch>
            </Router>
        </div>
    );
};

export { App }
