import React from "react";
import classes from './Header.module.css';
import logo from '../../image/icons/logo.svg';





const Header = (props) => {
    return (  
            <header className={classes.header}>
                <div className="container">   
                    <div className={classes.header__row}>
                        <div className={classes.header__logo}>
                            <img className={classes.logo} src={logo} />
                            <span className={classes.title}>Fashion</span>
                        </div>
                        <div className={classes.nav__menu}>
                            <div className={classes.nav__item}>Catalogue</div>
                            <div className={classes.nav__item}>Fashion</div>
                            <div className={classes.nav__item}>Favourite</div>
                            <div className={classes.nav__item}>Lifestyle</div>
                            <div className={classes.nav__item}><button className={classes.nav__btn}>Sign Up</button></div>
                        </div>
                    </div>
                </div>
            </header>
    );
};




export default Header;