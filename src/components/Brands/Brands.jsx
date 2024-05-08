import React from "react";
import classes from './Brands.module.css';
import HM from '../../image/brands/HM.png';
import obey from '../../image/brands/Obey.png';
import shop from '../../image/brands/Shopify.png';
import lacoste from '../../image/brands/Lacoste.png';
import levis from '../../image/brands/Levis.png';
import zon from '../../image/brands/Amazon.png';
import '../../style/common.css';

const Brands = (props) => {
    return (
        <section className={classes.brands__content}>
           <div className={classes.container}>
                <div className={classes.brands__row}>
                  
                        
                        <img src={HM} alt="hm" />
                        <img src={obey} alt="obey" />
                        <img src={shop} alt="shopify" />
                        <img src={lacoste} alt="lacoste" />
                        <img src={levis} alt="levis" />
                        <img src={zon} alt="amazon" />
                    
                 
                </div>
            </div>
        </section>
    );
};





export default Brands;