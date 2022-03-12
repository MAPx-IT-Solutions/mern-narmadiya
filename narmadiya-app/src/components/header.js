import React from 'react';
import styles from '../Styles/Header.module.css'
import {Link} from 'react-router-dom'
// import Banner from '../img/topheadimag.png'
export const Header = () => {
    return(
        <>
            <div className={styles.headContainer}  >
                <Link to="/" className={styles.headerLink}><span className={styles.headContainerSpan}>अखिल भारतीय</span><br/>नार्मदीय ब्राह्मण <br/> समाज </Link>
            </div>
        </>
    )
}
