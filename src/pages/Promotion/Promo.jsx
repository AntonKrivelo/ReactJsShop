import React from "react";
import classes from './Promo.module.css';
import girls from '../../image/bg/header-img.jpg';
import vec from '../../image/vector/lepest.svg';



const Promo = (props) => {
    return (
        <div>  
        <div className="container">
            <section className={classes.promo}>
                <div className={classes.promo__content}>
                    <div className={classes.promo__text}>    
                    <div className={classes.promo__title}>
                            <span className={classes.highlight}>
                                <span>LET'S</span>      
                            </span>
                                EXPLORE 
                            <span className={classes.highlight__yellow}>
                                <span>UNIQUE</span>  
                            </span>
                                CLOTHES.   
                        </div>     
                        <span className={classes.promo__subText}>Live for Influential and Innovative fashion!</span>         
                        <div className={classes.promo__buy}>
                            <img src={vec} alt="lepes" />
                            <button className={classes.shop__btn}>Shop Now</button>
                        </div>
                    </div>
                    <div className={classes.promo__img}>
                        <img src={girls} alt="girls" />
                    </div>
                </div>
            </section>
            
            </div>
        </div>
    );
};








export default Promo;