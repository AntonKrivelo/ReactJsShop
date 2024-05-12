import React from "react";
import classes from './Application.module.css';
import social__app__1 from '../../image/icons/app-store.png';
import social__app__2 from '../../image/icons/google-play.png';
import mobile from '../../image/bg/vouchers-img.png';


const Application = () => {
    return (
        <div className={classes.application__page}>
                <div className="container">
                    <div className={classes.block__app}>
                            <div className={classes.app__text}>
                                <h2 className={classes.header__text}>DOWNLOAD APP & <br /> GET THE VOUCHER!</h2>
                                <span className={classes.mute__text}>Get 30% off for first transaction using <br /> Rondovision mobile app for now.</span>
                                <div className={classes.social__app}>
                                    <img className={classes.icon} src={social__app__1} alt="app_store" />
                                    <img className={classes.icon} src={social__app__2} alt="google_store" />
                                </div>
                            </div>
                            <div className={classes.app__img}>
                                <img className={classes.img__voucher} src={mobile} alt="mobile" />
                            </div>
                    </div>
                </div>
        </div>
    )
}






export default Application;