import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
function Navigate(){
    const oneStyle={
        display:"flex",
        flexDirection:"row",
        justifyContent:"spaceAround",
        color:"red",
        fontSize:"20px",
        textDecoration:"none",

    }
    return(
        <div style={{backgroundColor:"black"}}>
            {/*<h1>Navigate component</h1>*/}
            <Link to ="/" style={oneStyle}>Home</Link>
            <Link to ="/About" style={oneStyle}>About</Link>
            <Link to ="/Contact" style={oneStyle}>Contact</Link>


        </div>
    )
}
export default Navigate;