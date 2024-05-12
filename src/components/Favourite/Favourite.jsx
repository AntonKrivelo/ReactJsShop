import React from "react";
import classes from './Favourite.module.css';
import img__item_1 from '../../image/bg/promo-01.jpg';
import img__item_2 from '../../image/bg/promo-02.jpg';
import arrow from '../../image/icons/arrow.svg';

const Favourite = (props) => {
    return (
        <div className={classes.favourite__page}>
            <div className="container">
                <div className={classes.page}>
                    <h2 className={classes.header__text}>Young’s Favourite</h2>
                    <div className={classes.items}>
                            <div className={classes.item}>
                                <img className={classes.img__item} src={img__item_1} alt="img_1" />
                                <span className={classes.title__item}>Trending for Instagram</span>
                                <div className={classes.mute__item}>
                                    Explore Now!
                                    <img src={arrow} alt="icon__arrow" />
                                </div>
                                
                            </div>
                            <div className={classes.item}>
                                <img className={classes.img__item} src={img__item_2} alt="img_2" />
                                <span className={classes.title__item}>All Under $40</span>
                                <div className={classes.mute__item}>
                                    Explore Now!
                                    <img src={arrow} alt="icon__arrow" />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default Favourite;