import React from 'react'
import Style from "./index.module.css"
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={Style.footer}>
            <div className={Style.container}>
                <div className={Style.box}>
                    <ul className={Style.flex}>
                        <li>Terms of Use</li>
                        <li>Privacy-Policy</li>
                        <li>Blog</li>
                        <li>FAQ</li>
                        <li>Watch List</li>
                    </ul>
                    <p>© 2023 Netflix. All Rights Reserved. Duplication and copy of this is strictly prohibited. All rights reserved.</p>
                </div>
                <div className={Style.boxIcon}>
                    <h3>Follow Us</h3>
                    <i > <FaFacebookF className={Style.icon} /> </i>
                    <i > <FaInstagram className={Style.icon} /> </i>
                    <i > <FaTwitter className={Style.icon} /> </i>
                    <i > <FaGithub className={Style.icon} /> </i>
                </div>
                <div className={Style.box}>
                    <h3>Netflix App</h3>
                    <div className={Style.Image}>
                        <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' />
                        <span>App Store</span>
                        <img src='https://img.icons8.com/fluency/48/000000/google-play.png' />
                        <span>Google Play Store</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer