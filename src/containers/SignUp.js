import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import { GrCommand } from 'react-icons/gr';
import {AiOutlineEyeInvisible , AiOutlineEye} from 'react-icons/ai';
import InputAdornment from '@mui/material/InputAdornment';


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


const SignUp = () => {

    
    
      const [Showpass,setShowpass] = useState(false);
      const [Showpass2,setShowpass2] = useState(false);
    
    const handleShowpassword = () => {
        setShowpass(!Showpass) ;
    };

    const handleShowpassword2 = () => {
      setShowpass2(!Showpass2) ;
    };


    const ValidateEmail = (input) => {
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (input.match(validRegex)) {
        return true;
      } 
      else {
        return false;
      }
    };
    const ValidatePassword = (first,second) => {
      if (first === second) {
        return true;
      } else {
        return false;
      }
    };

    const [toggleAlertEmail,setToggleAlertEmail] = useState(false)
    const [toggleAlertPassword,setToggleAlertPassword] = useState(false)

    const handleSignUp = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data.get('username'));
        console.log(data.get('email')); 
        console.log(data.get('password'));
        console.log(data.get('confirmPassword'));
        console.log(data.get('phoneNumber'));

        if(ValidateEmail(data.get('email')))
        {
          setToggleAlertEmail(false);
          setToggleAlertPassword(false);
        }else{
          setToggleAlertEmail(true);
          setToggleAlertPassword(true);
        }

        if(ValidatePassword(data.get('password'),data.get('confirmPassword')))
        {
          setToggleAlertPassword(false);
        }else{
          setToggleAlertPassword(true);
        }
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
            Sign Up
        </Typography>

        <Box component="form" onSubmit={handleSignUp} noValidate sx={{ mt: 1 }}>
        
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
             // required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />
            {toggleAlertEmail && <Alert severity="error">Email Invalid</Alert>}
            <TextField
              margin="normal"
             // required
              fullWidth
              id="password"
              label="Password"
              name="password"
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

            <TextField
              margin="normal"
            //  required
              fullWidth
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              type={Showpass2 ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowpassword2}
                        edge="end"
                      >
                        {!Showpass2 ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
           {toggleAlertPassword && <Alert severity="error">Passwords Don't Match</Alert>}
         
            <TextField
              margin="normal"
             // required
              fullWidth
              name="phoneNumber"
              label="Phone Number"
              type="text"
              id="phoneNumber"
            />
            

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>

            <Grid container>
              
              <Grid item> You dont have an account yet ?
                <Link to='/SignIn' variant="body2" style={{color:'#F4B5A9'}}>
                 Sign in
                </Link>
              </Grid>
            </Grid>
        </Box>
      </Box>
        
      
      
    </Container>
      
  </ThemeProvider>
  )
}

export default SignUp