import styled from "@emotion/styled";
import { 
    Typography,
    Paper,
    Grid,
    TextField,
    InputAdornment,
    Button,
    skeletonClasses
       } from "@mui/material";

export const Parentcontainer=styled(Grid)(()=>({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100vh'

}))       

export const Maincontainer=styled(Grid)(()=>({
     display:'flex',
     alignItems:'center',
     justifyContent:'center',
     flexDirection:'column',
     
}))
export const Wrapper=styled(Paper)(({theme})=>({
    padding:'30px 30px 80px 30px',
    // width:'50px',
    backgroundColor:'white',
    borderRadius:'10px',
    background:'linear-gradient(to left,#ff25ff,#60afdd)',

    ['theme.breakpoints.down(sm)']: {
        backgroundColor: 'red',
      },

}))
export const Input=styled(TextField)(()=>({
     margin:'normal'
})) 
export const Loginword=styled(Typography)(()=>({
     fontWeight:'bolder',
     fontFamily:'sans-serif',
     fontSize:'30px'
}))
export const Submit=styled(Button)(()=>({
    background:'linear-gradient(to left,#060206,#191c1e)',
    color:'#fff',
    borderRadius:'32px'
}))
