import React from 'react'
import './Login.css';
import '../App.css';
import image from "../images/sports.png"
import Button from '@material-ui/core/Button';//import Video2 from "./videos/video-2.mp4"
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from "@material-ui/core/FormControlLabel";

// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;
function Login() {
    const [checked, setChecked] = React.useState(false);
    const [checked1, setChecked1] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleChange1 = (event) => {
    setChecked1(event.target.checked1);
  };
    return (
        <div className='hero-container'>
            <img src = {image} className="img-fluid-animated"/>
            <div className="text">
            <h1>BookIT</h1>
            <p>Simplifying the way of online Bookings</p>
    <div className='check'      >  
    <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} />} label="User" />   
    <FormControlLabel control={<Checkbox checked={checked1} onChange={handleChange1} />} label="Admin" />             
    </div>
    <div className = "hero-btns">
            
    <Button variant="outlined" color="success">
        Sign In using Google Account
      </Button>
           
                
               </div> 

            </div>
            
        </div>
    )
}

//const styles = StyleSheet.create({})

export default Login