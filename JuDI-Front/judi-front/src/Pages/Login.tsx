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
import {userLogin} from "../Models/user";
import {getUserLogin} from "../Actions/UserActions";

export const menuSectionRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const aboutUsRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const aboutSiteRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const contactUsRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()

//document.getElementById("wellSentence").r_text = i;

//var bgcolorlist=new Array("#e2e2e2")

//document.body.style.background=bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 375,
      height: 400,
      fontSize: '1.25rem',
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
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
      marginTop: theme.spacing(10)
    }
  })
);

type State = {
  email: string
  password:  string
  isButtonDisabled: boolean
  helperText: string
  isError: boolean
  ableToLogin: boolean
};

const initialState:State = {
  email: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false,
  ableToLogin: false
};

type Action = { type: 'setEmail', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setEmail': 
      return {
        ...state,
        email: action.payload
      };
    case 'setPassword': 
      return {
        ...state,
        password: action.payload
      };
    case 'setIsButtonDisabled': 
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'loginSuccess': 
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'loginFailed': 
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'setIsError': 
      return {
        ...state,
        isError: action.payload
      };
  }
}

const Login = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.email.trim() && state.password.trim()) {
     dispatch({
       type: 'setIsButtonDisabled',
       payload: false
     });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.email, state.password]);

  const handleLogin = async() => {
    var u : userLogin= await getUserLogin()

    if (state.email === u.user_name && state.password === u.password) {
      state.ableToLogin = true
      dispatch({
        type: 'loginSuccess',
        payload: 'Login Successfully',
      });
    }
    else {
      state.ableToLogin = false
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect email or password'
      });
    } 
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setEmail',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }
  


  return (
    <div>
      <Header aboutUsRef={aboutUsRef}
              aboutSiteRef={aboutSiteRef}
              menuSectionRef={menuSectionRef}
                        />
      {/** END nav  **/}
    <div className="main-page-body">
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Login" />
        <CardContent>
          <div>
            <TextField
              error={state.isError}
              fullWidth
              id="email"
              type="email"
              label="Email"
              placeholder="Email"
              margin="normal"
              onChange={handleUsernameChange}
              onKeyPress={handleKeyPress}
            />
            <TextField
              error={state.isError}
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              helperText={state.helperText}
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button 
            href={state.ableToLogin? "/Dashboard" : "/"}
            variant="contained"
            size="large"
            color="secondary"
            className={classes.loginBtn}
            onClick={handleLogin}
            disabled={state.isButtonDisabled}>
            Login
          </Button>
        </CardActions>
        <div>
          <a href="/register">Click here to SignUp!</a>
        </div>
      </Card>
    </form>
    </div>
    <Loader/>
    </div>
  );
}

export default Login;