import { Fragment } from "react";
import React from "react";
import foodImage from '../Assets/meals.jpg';
import classes from './Header.module.css';

import CartIcon from "../Cart/CartIcon";
import CartButton from './CartButton'
const Header=(props)=>{
    return(
<Fragment>
    <header className={classes.header}>
    <h1>REBBECCA</h1>
    <CartButton onClick={props.onShowCart}/>
    </header>

<div className={classes['main-image']}>
<img src={foodImage} alt="image"/>

</div>

</Fragment>
    )

};
export default Header;