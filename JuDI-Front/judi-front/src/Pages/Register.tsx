import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 375,
      margin: `${theme.spacing(0)} auto`
    },
    registerBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
      background: '#2DD111'
    },
    header: {
      textAlign: 'center',
      background: 'Blue',
      color: '#fff'
    },
    card: {
      marginTop: theme.spacing(10)
    }
  })
);

type State = {
  username: string
  email: string
  password:  string
  confirmPassword: string
  isButtonDisabled: boolean
  helperText: string
  isError: boolean
};

const initialState:State = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false
};

type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | {type: 'setEmail',payload: string}
  | {type: 'setConfirmPassword', payload: string}
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'registerSuccess', payload: string }
  | { type: 'registerFailed', payload: string }
  | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername': 
      return {
        ...state,
        username: action.payload
      };
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
      case 'setConfirmPassword':
          return{
              ...state,
              confirmPassword: action.payload
          };
    case 'setIsButtonDisabled': 
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'registerSuccess': 
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'registerFailed': 
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

const Register = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
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
  }, [state.username, state.password]);

  const handleRegister = () => {
    if (state.email === 'abc@email.com' && state.username === 'username' 
    && state.password === 'password' && state.confirmPassword == 'password') {
      dispatch({
        type: 'registerSuccess',
        payload: 'Sign Up Successfully'
      });
    } else {
      dispatch({
        type: 'registerFailed',
        payload: 'Please Try Again'
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleRegister();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> =
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
  const handleConfirmPasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setConfirmPassword',
        payload: event.target.value
      });
    }
  
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Register" />
        <CardContent>
          <div>
            <TextField
              error={state.isError}
              fullWidth
              id="username"
              type="username"
              label="Username"
              placeholder="Username"
              margin="normal"
              onChange={handleUsernameChange}
              onKeyPress={handleKeyPress}
            />
            <TextField
              error={state.isError}
              fullWidth
              id="email"
              type="email"
              label="Email"
              placeholder="Email"
              margin="normal"
              onChange={handleEmailChange}
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
            <TextField
              error={state.isError}
              fullWidth
              id="confirmPassword"
              type="password"
              label="Confrim Password"
              placeholder="Confirm Password"
              margin="normal"
              helperText={state.helperText}
              onChange={handleConfirmPasswordChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.registerBtn}
            onClick={handleRegister}
            disabled={state.isButtonDisabled}>
            Sign Up
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

export default Register;