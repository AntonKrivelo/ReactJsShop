import React from "react";
import cat__1 from '../../../image/categories/cat-01.jpg';
import cat__2 from '../../../image/categories/cat-02.jpg';
import cat__3 from '../../../image/categories/cat-03.jpg';
import arrow from '../../../image/icons/arrow.svg';
import classes from './Card.module.css';



const Card = (props) => {
    return (
        <div className={classes.cards}>
            
                <div className={classes.card__item}>
                    <img src={cat__1} alt="cat-1" />
                    <div className={classes.card__title}>
                        Hoodies & Sweetshirt
                    </div>
                    <div className={classes.card__mute}>
                        Explore Now!
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className={classes.card__item}>
                    <img src={cat__2} alt="cat-2" />
                    <div className={classes.card__title}>
                        Hoodies & Sweetshirt
                    </div>
                    <div className={classes.card__mute}>
                        Explore Now!
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className={classes.card__item}>
                    <img src={cat__3} alt="cat-3" />
                    <div className={classes.card__title}>
                        Hoodies & Sweetshirt
                    </div>
                    <div className={classes.card__mute}>
                        Explore Now!
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
         </div>
    );
};



export default Card;