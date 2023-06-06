import React , { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { GrCommand } from 'react-icons/gr';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
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


const NewPassword = () => {

    const [Showpass,setShowpass] = useState(false);
    const [Showpass2,setShowpass2] = useState(false);
  
  const handleShowpassword = () => {
      setShowpass(!Showpass) ;
  };

  const handleShowpassword2 = () => {
    setShowpass2(!Showpass2) ;
  };

  const handleNew = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("password"));
    console.log(data.get("confirmPassword"));
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
            New Password
        </Typography>

        <Box component="form" onSubmit={handleNew} noValidate sx={{ mt: 1 }}>
        
        <TextField
              margin="normal"
             // required
              fullWidth
              id="password"
              label="New Password"
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
              label="Confirm New Password"
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
          <Link to='/SignIn' variant="body2" style={{color:'#F4B5A9'}}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>  
               SAVE
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
 </ThemeProvider>
  );
}
export default NewPassword
