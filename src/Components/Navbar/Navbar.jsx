import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
const theme = createTheme({
  palette: {
    primary: {
      main: "#f3f3f3"
    }
  }
});


const Navbar = () => {
  const {
 
    isAuthenticated,
    logout, user

  } = useAuth0();
      const navigate = useNavigate();

  const logoutUser = () => {
    logout({
      returnTo: navigate("/login")
    });
  }

  const isUser = isAuthenticated && user;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static"  >
          <Container maxWidth="lg" sx={{ py: 1 }}>
            <Toolbar>
              <IconButton sx={{ p: 0, mx: 2 }}>
                {isUser && user.picture && <Avatar alt={user.nickname} src={user.picture ? user.picture : '/static/images/avatar/2.jpg'} />}
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {isUser && user.name && <Typography className="label" variant="span" sx={{ textTransform: 'uppercase'  }}>Welcome , {user.email}</Typography>}
              </Typography>

              {isUser && <Button onClick={logoutUser} color="inherit">logout</Button> 

              }

            </Toolbar>

          </Container>

        </AppBar>
      </Box>

    </ThemeProvider>


  );
};
export default Navbar;
