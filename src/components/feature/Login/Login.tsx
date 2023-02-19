import React from "react";
import { Maincontainer,Wrapper,Parentcontainer,Input, Loginword,Submit} from "./style";
import {PersonOutline} from '@mui/icons-material';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import {useState} from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";

import { 
    Typography,
    Paper,
    Grid,
    TextField,
    InputAdornment,
    Button,
    Avatar,
    IconButton
       } from "@mui/material";

 function Login(){
    const [showPassword,setShowPassword]=useState(Boolean<false>)
    const handleClickShowPassword = () =>{

     setShowPassword((show) => !show);
    }

    return(
        <Parentcontainer>
            <Wrapper elevation={5}>
                <Maincontainer >
                    <Avatar sx={{backgroundColor:'green',height:'45px',width:'46px'}}/>
                    <Loginword>
                        Login
                    </Loginword>
                </Maincontainer>
                <form style={{display:'flex',flexDirection:'column',marginTop:'30px'}}>
                    <Input
                    variant="standard"
                    required
                    placeholder="Enter your name"  
                   InputProps={{
                    startAdornment:(
                        <InputAdornment >
                        <PersonOutline/>
                        </InputAdornment>
                    )
                   }}                   
                    />
                    <Input
                    margin="normal"
                    variant="standard"
                    required
                    placeholder="Enter email"
                    InputProps={{
                        startAdornment:(
                            <InputAdornment >
                            <EmailIcon/>
                            </InputAdornment>
                        )
                       }}  
                    />
                    <Input
                    margin="normal"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment:(
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                // onMouseDown={handleMouseDownPassword}
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                        )
                       }}  
                    // label='password'
                    variant="standard"
                    required
                    placeholder="Enter you password "
                    />
                    <Submit type='submit'>Submit</Submit>
                    <Link to='/createpassword' style={{transform:'translateY(10px)',color:'darkblue'}}>Create an account</Link>

                </form>

            </Wrapper>
          
        </Parentcontainer>
    )
}
export default Login