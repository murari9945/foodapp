import { Fragment } from "react";
import React from "react";
import foodImage from '../Assets/meals.jpg';
import classes from './Header.css';
import Description from "../Description/Description";
const Header=()=>{
    return(
<Fragment>
    <header className={classes.header}>
    <h1>REBBECCA</h1>
    <button>Cart</button>
    </header>

<div className={classes['main-image']}>
<img src={foodImage} alt="image"/>
<Description/>
</div>

</Fragment>
    )

};
export default Header;