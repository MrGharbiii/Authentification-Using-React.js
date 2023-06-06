import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { GrCommand } from 'react-icons/gr';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';





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



const ResetPassword = () => {

  const handleReset = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("email"));
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
            Reset Password
        </Typography>

        <Box component="form" onSubmit={handleReset} noValidate sx={{ mt: 1 }}>
        
            <TextField
              margin="normal"
             // required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />

          <Link to='/NewPassword' variant="body2" style={{color:'#F4B5A9'}}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>  
               RESET
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
 </ThemeProvider>
  );
}

export default ResetPassword
