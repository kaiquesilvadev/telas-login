import React from "react";
import { Box, Button, TextField, Typography} from '@mui/material';
import './Login.css';
import { Grid, Paper } from "@material-ui/core";

function Login(){
    return(
     <>
        <section className="container">
           <div className="container-item">
            <h1>Login</h1>
            <form action="">
                <div className="info">
                    <h2>username</h2>
                <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='none' fullWidth />
                <h2>password</h2>
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='none' type='password'fullWidth />  
                </div>
                <Button className="button">Login</Button>
            </form>
           
           </div>
        </section>
     </>
    );
}
export default Login;