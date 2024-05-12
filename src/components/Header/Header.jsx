import React from "react";
import classes from './Header.module.css';
import logo from '../../image/icons/logo.svg';
import {Routes, Route, Link} from 'react-router-dom';
const Header = (props) => {


    return (  
            <header className={classes.header}>
                <div className="container">   
                    <div className={classes.header__row}>
                        <div className={classes.header__logo}>
                            <img className={classes.logo} src={logo} />
                            <span className={classes.title}>Fashion   </span>
                        </div>
                        <div className={classes.nav__menu}>
                                <div className={classes.nav__item}><Link to="/">Home</Link></div>
                                <div className={classes.nav__item}> <Link to="/catalogue">Catalogue</Link> </div>
                                <div className={classes.nav__item}> <Link to="app">App</Link> </div>
                                <div className={classes.nav__item}> <Link to="/favourite">Favourite</Link></div>
                                <div className={classes.nav__item}><Link to="/lifestyle">Lifestyle</Link></div>
                                <div className={classes.nav__item}><button className={classes.nav__btn}>Sign Up</button></div>
                        </div>
                    </div>
                </div>    
                <hr className={classes.line} />
            </header>
    );
};




export default Header;