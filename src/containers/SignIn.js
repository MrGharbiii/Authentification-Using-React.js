import React , { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { GrCommand } from 'react-icons/gr';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {AiOutlineEyeInvisible , AiOutlineEye} from 'react-icons/ai';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';




const theme1 = createTheme(

   { palette: {
    primary: {
      light: '#757ce8',
      main: '#F4B5A9',
      dark: '#F4B5A9', //try to click submit button
      contrastText: '#f4f2f2',
    },
    secondary: {
      light: '#ff7961',
      main: '#F4B5A9',
      dark: '#ba000d',
      contrastText: '#fff',
    },
  },
  }
);



const  SignIn= () => {

  const handleSignIn = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get('username')); 
    console.log(data.get('password'));
  };
  
  const [Showpass,setShowpass] = useState(false);
    const handleShowpassword = () => {
    setShowpass(!Showpass) ;
  };
  

  return (
    
  <ThemeProvider theme={theme1}>
       
    <Container component="main" style={{width:"40%"}}>
      
      <CssBaseline />
        

      <Box
          sx={{
            marginTop: 10,
            width:'100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius:'10px', 
          }}
        >

       
       
        <Typography component="h1" variant="h5" color="#555" >
            Sign In
        </Typography>

        <Box component="form" onSubmit={handleSignIn} noValidate sx={{ mt: 1 }}>
            
        <TextField
              margin="normal"
             // required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
            />
            
            <TextField
              margin="normal"
              //required
              fullWidth
              name="password"
              label="Password"
              id="password"
              type={Showpass ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowpassword}
                        edge="end"
                      >
                        {!Showpass ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              name="remember"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>

                
                <Link to="/ResetPassword" variant="body2" style={{color:'#F4B5A9'}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/SignUp' variant="body2" style={{color:'#F4B5A9'}}>
                  Sign up
                </Link>
              </Grid>
            </Grid>

        </Box>
      </Box>
        
      
      
    </Container>
      
  </ThemeProvider>

  );
}
export default SignIn
