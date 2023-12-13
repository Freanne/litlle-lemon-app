import React from "react";
import restaurant from './restaurant.jpg'

const Footer = () => {
    return (
        <footer>
            <img src={restaurant} alt="resto" width={150} height={150}/>
            <div>
                <ul>
                    <li>Navigation</li>
                    <li>
                        <a href="#home"> Home </a>
                    </li>
                    <li>
                        <a href="#about"> About</a>
                    </li>
                    <li>
                        <a href="#menu"> Menu</a>
                    </li>
                    <li>
                        <a href="#reservation"> Reservations</a>
                    </li>
                    <li>
                        <a href="#order-online"> Order Online</a> 
                    </li>
                    <li>
                        <a href="#login"> Login</a> 
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li> Contact</li>
                    <li>
                        <a href="#menu"> Address</a> 
                    </li>
                    <li>
                        <a href="#reservation"> Phone Number</a> 
                    </li>
                    <li>
                        <a href="#order-online">E-mail</a> 
                    </li>

                </ul>
            </div>
            <div>
                <ul>
                    <li> Social media link</li>
                    <li>
                        <a href="#menu"> Facebook</a>
                    </li>
                    <li>
                        <a href="#reservation"> LinkedIn</a>
                    </li>
                    <li>
                        <a href="#order-online">Twitter</a>
                    </li>

                </ul>
            </div>

        </footer>
    )
}

export default Footer;
