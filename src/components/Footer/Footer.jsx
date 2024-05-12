import React from "react";
import classes from './Footer.module.css';
import facebook from '../../image/socials/fb.svg';
import inst from '../../image/socials/inst.svg';
import twitter from '../../image/socials/tw.svg';
import linkedin from '../../image/socials/in.svg';





const Footer = () => {
    return (
        <div className={classes.footer__page}>
            <div className="container">
                <div className={classes.footer__block}>
                    <div className={classes.social__link}>
                        <h2 className={classes.header__social}>Fashion</h2>
                        <div className={classes.social__mute_text}>Complete your style with awesome <br /> clothes from us.</div>
                        <div className={classes.social__icons}>
                            <img src={facebook} alt="fb" />
                            <img src={inst} alt="inst" />
                            <img src={twitter} alt="twitter" />
                            <img src={linkedin} alt="linkedin" />
                        </div>
                    </div>
                    <div className={classes.social__link}>
                        <ul className={classes.social__items}>
                            <li className={classes.social__item_header}>Company</li>
                            <li className={classes.social__item}>About</li>
                            <li className={classes.social__item}>Contact us</li>
                            <li className={classes.social__item}>Support</li>
                            <li className={classes.social__item}>Careers</li>
                        </ul>
                    </div>
                    <div className={classes.social__quick}>
                    <ul className={classes.social__items}>
                            <li className={classes.social__item_header}>Quick Link</li>
                            <li className={classes.social__item}>Share Location</li>
                            <li className={classes.social__item}>Orders Tracking</li>
                            <li className={classes.social__item}>Size Guide</li>
                            <li className={classes.social__item}>FAQs</li>
                        </ul>
                    </div>
                    <div className={classes.social__legal}>
                        <ul>
                            <li className={classes.social__item_header}>Legal</li>
                            <li className={classes.social__item}>Terms & conditions</li>
                            <li className={classes.social__item}>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Footer;