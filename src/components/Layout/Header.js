import { Fragment } from "react";
import React from "react";
import foodImage from '../Assets/header.png';
import classes from './Header.css';
const Header=()=>{
    return(
<Fragment>
    <header className={classes.Header}>
    <h1>REBBECCA</h1>
<button>Cart</button>
    </header>

<div className={classes['main-image']}>
<img src={foodImage} alt="image"/>
</div>
</Fragment>
    )

};
export default Header;