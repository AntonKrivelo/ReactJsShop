import React from "react";
import classes from './Sale.module.css';
import imgPromo from '../../image/bg/promo-img-1.jpg';




const Sale = () => {
    return (
        <div className='container'>
            <div className={classes.sale}>
                <div className={classes.row}>
                    <div className={classes.img}>
                        <img src={imgPromo} alt="promo__img" />
                    </div>
                    <div className={classes.information}>
                        <span className={classes.highlight}>PAYDAY</span>
                        <span className={classes.bold}>SALE NOW</span>    
                        <div className={classes.text}>
                            <span>Spend minimal $100 get 30% off <br /> voucher code for your next purchase</span>
                            <span className={classes.date}>1 June - 10 June 2021</span>
                            <span>*Terms & Conditions apply</span>   
                       </div>
                       <button className={classes.shop__btn}>Shop Now</button>
                    </div>
                </div>            
            </div>
        </div>
    );
};




export default Sale;