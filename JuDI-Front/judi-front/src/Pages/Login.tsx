import React, { useReducer, useEffect } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import {createRef, RefObject} from "react";
import axios, {AxiosRequestConfig} from "axios";
import {UserFullData, userLogin} from "../Models/user";
import {getUserFullData, getUserLogin} from "../Actions/UserActions";
import {Redirect, RouteComponentProps, withRouter, WithRouterProps} from "react-router";
import {BrowserRouterProps} from "react-router-dom";
import "../CSS/Login.css"


export const menuSectionRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const aboutUsRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const aboutSiteRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const contactUsRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()

interface ILoginState {
    user_name: string
    password:  string
    isButtonDisabled: boolean
    helperText: string
    isError: boolean,
    loggedIn: boolean
};

class Login extends React.Component<RouteComponentProps, ILoginState> {

    style = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 375,
            height: 400,
            fontSize: '1.25rem',
            // margin: `${theme.spacing(0)} auto`
        },
        loginBtn: {
            // marginTop: theme.spacing(2),
            flexGrow: 1,
            fontSize: '1.5rem',
            background: '#2DD111'
        },
        header: {
            color: 'black',
            textAlign: 'center',
            background: '#3EECAC',
        },
        card: {
            width: 400,
            height: 325,
            // marginTop: theme.spacing(10)
        }
    }


    constructor(props: RouteComponentProps) {
        super(props)
        this.state = {
            user_name: "",
            helperText: "",
            isButtonDisabled: true,
            isError: false,
            loggedIn: false,
            password: ""
        }
    }



    handleLogin = async() => {

        //var u : userLogin= await getUserLogin()
        //console.log(u.email)
        var luser: userLogin = {

            user_name: this.state.user_name,
            password: this.state.password,
        }

        var loginResponse : number = await getUserLogin(luser)

        var userData: UserFullData = await getUserFullData();

        // localStorage.setItem("image", "");
        // localStorage.setItem("image", userData.avatar);

        if (loginResponse == 1) {
            this.setState({
                loggedIn: true
            })
            console.log(localStorage.getItem("token"))
            this.props.history.push("/dashboard")

        } else {
            this.setState({
                loggedIn: false
            })
        }
        console.log("----" + this.state.loggedIn)
    };

    handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.keyCode === 13 || event.which === 13) {
            this.state.isButtonDisabled || this.handleLogin();
        }
    };

    handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
        (event) => {
            this.setState({
                user_name: event.target.value,
                isButtonDisabled: false
            })
        };

    handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
        (event) => {
            this.setState({
                password: event.target.value
            })
        }


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <Header aboutUsRef={aboutUsRef}
                        aboutSiteRef={aboutSiteRef}
                        menuSectionRef={menuSectionRef}
                />
                {/** END nav  **/}
                <div className="main-page-body">
                    <div className="mainLogin">
                        <form className="container" noValidate autoComplete="off">
                            <Card className="mycard">
                                <CardHeader className="headers" title="Login" />
                                <CardContent>
                                    <div>
                                        <TextField
                                            error={this.state.isError}
                                            fullWidth
                                            id="user_name"
                                            type="user_name"
                                            label="UserName"
                                            placeholder="UserName"
                                            margin="normal"
                                            onChange={this.handleUsernameChange}
                                            onKeyPress={this.handleKeyPress}
                                        />
                                        <TextField
                                            error={this.state.isError}
                                            fullWidth
                                            id="password"
                                            type="password"
                                            label="Password"
                                            placeholder="Password"
                                            margin="normal"
                                            helperText={this.state.helperText}
                                            onChange={this.handlePasswordChange}
                                            onKeyPress={this.handleKeyPress}
                                        />
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <Button className="loginbtn"
                                            variant="contained"
                                            size="large"
                                            color="secondary"
                                            onClick={this.handleLogin}
                                        // href={this.state.loggedIn? "/Dashboard" : "/Login"}
                                            disabled={this.state.isButtonDisabled}>
                                        Login
                                    </Button>
                                </CardActions>
                                <div>
                                    <a href="/register">Click here to SignUp!</a>
                                </div>
                            </Card>
                        </form>
                    </div>
                </div>
                <Loader/>
            </div>
        );
    }
}

export default withRouter(Login);