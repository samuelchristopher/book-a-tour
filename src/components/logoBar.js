import React from "react"
import style from "./nav.module.css"
import { Link } from "gatsby"

const LogoBar = () => (
    <div className={style.logobar__bg}>
        <div className={style.logobar__container}>
            <div className={style.words__container}>
                <h3 className={style.words__gta}>grace travel agency</h3>
                <p className={style.words__slogan}>If you love travel, you'll love us.</p>
            </div>
            <Link to="/" className={style.logo}></Link>
            <div className={style.social__container}>
                <a target="_blank" href="https://www.facebook.com/gracetravelbrunei/" rel="noopener noreferrer" className={style.social__fb}></a>
                <a target="_blank" href="http://www.instagram.com/gracebrunei/" rel="noopener noreferrer" className={style.social__ig}></a>
            </div>
        </div>
    </div>
)

export default LogoBar