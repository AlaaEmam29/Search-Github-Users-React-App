import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import  loginImg  from '../../images/login-image.svg';
import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
      const {
    loginWithRedirect,
    

  } = useAuth0();

    const boxStyle =
    {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        'h1 , button ': {
        letterSpacing: '0.25em',
    
    },
   
    }
   
    return <React.Fragment>
             <CssBaseline />
      <Container maxWidth="md">
            <Box sx={boxStyle} >
                <img src={loginImg} alt="loginImg" />
                <h1>Github USer </h1>
                     <Button onClick={loginWithRedirect}  variant="contained">Login / Sign up</Button>

    
            </Box>
      </Container>

        </React.Fragment>;
}
export default Login;
//