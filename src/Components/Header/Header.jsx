import React, { useState } from 'react'
import Style from "./index.module.css"
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
//import { FaBars } from "react-icons/bs";
import { AiOutlineUser, AiTwotoneBell } from "react-icons/ai";

const Header = () => {

    const [Mobile, SetMobile] = useState(false);

    return (
        <div className={Style.Header}>
            <div className={Style.container}>
                <div className={Style.wrapper}>
                    <div className={Style.logo}>
                        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netfix" />
                    </div>
                    <ul className={Mobile ? Style.navMenu_list : Style.flexSB} onClick={() => SetMobile(true)}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/series'>Series</Link></li>
                        <li><Link to='/movies'>Movies</Link></li>
                        <li><Link to='/pricing'>Pricing</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                    <button className={Style.toggle} onClick={() => SetMobile(!Mobile)}>
                        {Mobile ? <i> <FaTimes /> </i> : <i> <FaBars /> </i>}
                    </button>
                    <div className={Style.account}>
                        <i> <BiSearch /> </i>
                        <i> <AiTwotoneBell /> </i>
                        <i> <AiOutlineUser /> </i>
                        <button>Subscribe Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header