import React from "react";
import classes from './Forms.module.css';



const Forms = () => {
    return (
        <div className={classes.forms__page}>
            <div className="container">
                    <div className={classes.forms}>
                            <h2 className={classes.header__form}>JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO</h2>
                            <div className={classes.subheader__text}>Type your email down below and be young wild generation</div>
                            <form className={classes.form} action="#">
                                <input className={classes.input__email} placeholder="Add your email here" type="email" />
                                <button className={classes.btn__form} type='submit'>Send</button>
                            </form>
                    </div>  
            </div>
        </div>
    )
}



export default Forms;