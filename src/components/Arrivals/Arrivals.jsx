import React from "react";
import classes from './Arrivals.module.css';
import Card from "./Cards/Card";


const Arrivals = (props) => {
    return (
        <section className={classes.arrivals}>
            <div className="container">
                <h2 className={classes.arrivals__title}>NEW ARRIVALS</h2>
                    <div className={classes.arrivals__row}>
                        <Card cardData={props.data.cardData} />
                    </div>
            </div>
        </section>
    );
};


export default Arrivals;