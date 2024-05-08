import React from "react";
import cat__1 from '../../../image/categories/cat-01.jpg';
import cat__2 from '../../../image/categories/cat-02.jpg';
import cat__3 from '../../../image/categories/cat-03.jpg';
import arrow from '../../../image/icons/arrow.svg';
import classes from './Card.module.css';



const Card = () => {
    return (
        <div className={classes.card}>
            <img src={cat__1} alt="cat-1" />
            <span className={classes.card__title}>Hoodies & Sweetshirt</span>
            <span className={classes.card__promo}>Explore Now! <img src={arrow} alt="arrow" /></span>
    </div>
    );
};



export default Card;