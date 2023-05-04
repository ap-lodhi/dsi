
import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { BsChevronDown } from 'react-icons/bs';
import { BiHomeAlt } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { TbArrowsCross } from 'react-icons/tb';
import { GiHamburgerMenu } from 'react-icons/gi';







const Navbar = () => {
    let date = new Date();
  let year = date.getFullYear();

    const [showMenu, setShowMenu] = useState(false)
    return (
        <>

            {/* header logo part  */}
            <nav className="main-nav">
                <div className="logo">
                    <NavLink to={'/'}>

                        <img src="./images/logo.jpg" alt="logo" style={{ width:"50%"}} />
                    </NavLink>

                </div>

                {/* middle part */}
                <div className={
                    showMenu ? "menu-link mobile-menu-link" : "menu-link"
                }>
                    <ul>
                        <li>
                            <NavLink to={"/services"}>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/product"}>product</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/technology"}>technology</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>About < BsChevronDown /></NavLink>
                        </li>
                        <li>
                            <NavLink to={"/clinet"}>Clinet  < BsChevronDown /></NavLink>
                        </li>
                        <li>
                            <NavLink to={"/partner"}>Partner</NavLink>
                        </li>
                    </ul>
                </div>
                {/* icons part  */}

                <div className="social-media">
                    <ul className="social-media-desktop" >
                        <li>
                            <BiHomeAlt />
                        </li>
                        <li>
                            <AiOutlineMail />
                        </li>
                        <li>
                            <TbArrowsCross />
                        </li>
                    </ul>
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMenu(!showMenu)}> <GiHamburgerMenu /></a>
                    </div>

                </div>
            </nav>
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Making the most of the ever-growing <br />
                        <span style={{ color: "#EE4248" }}>Information Technology</span> </h1>
                    <p>Managed by a team of professional experts with extensive experience and impressive track records</p>
                    <button className="btn">Read More</button>
                </div>
                <div className="hero-image">
                    <img src="./images/com.jpg" alt="" style={{ width: "90%" }} />
                </div>
            </section>

            <div className="welcome">
                <div>
                    <img src="https://user-images.githubusercontent.com/87072168/236019191-b4e330fd-d052-4a8e-b923-a9fc52ea297a.JPG" alt="men" style={{ width: "65%", marginLeft: "50px" }} />
                </div>
                <div className="welcome-content">
                    <h1>Welcome to <span style={{ color: "#EE4248" }}>Dwidasa Samsara Indonesia (DSI)</span></h1>
                    <br />

                    <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span style={{ color: "#EE4248" }}>DSI’s</span>  distinct front-end based application concept.</p>
                    <br />

                    <p>Managed by a team of professional experts with extensive experience and impressive track records, <span style={{ color: "#EE4248" }}>DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
                </div>

            </div>

            <div className="product-heading">
                <h1>Product and Service</h1>
            </div>

            <div className="services">
                <div>
                    <img src="./images/product-description 1.png" alt="product-image" />
                    <h1>Our Product</h1>
                    <p>Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>
                    <button className="btn">Read More</button>
                </div>

                <div>
                    <img src="./images/verified 1.png" alt="product-image" />
                    <h1>Our Service</h1>
                    <p>Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>
                    <button className="btn">Read More</button>
                </div>

                <div>
                    <img src="./images/cogwheel 1.png" alt="product-image" />
                    <h1>Our Technology</h1>
                    <p>Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>
                    <button className="btn">Read More</button>
                </div>
            </div>
            <div className="bottom">
                <div className="lo">
               
                    <img src="./images/logo.jpg" alt="logo" style={{ width:"30%" }} />
                    <h3>PT Dwidasa Samsara Indonesia</h3>
                    <p>Ruko Jalur Sutera 29A No. 53 Alam Sutera Serpong, Tangerang 15323</p>
                </div>
                <div>
                    <h1>Contact</h1>
                    <p>Phone : +62.21.5314.1135 <br />
                        Fax : +62.21.5314.1135 <br />
                        Email : community@dwidasa.com</p>
                </div>
                <div>
                    <img src="./images/image 7.png" alt="" />
                    <img src="./images/image 9.png" alt="" />
                    <img src="./images/image 10.png" alt="" />
                    <br />
                    <img src="./images/image 11.png" alt="" />
                    <img src="./images/image 14.png" alt="" />
                    <img src="./images/image 13.png" alt="" />
                </div>
            </div>
            <footer>
                <div className="footer-part">
                <div>
                <h1>Copyright © {year}  - Dwidasa Samsara Indonesia </h1>
                </div>
                </div>
            </footer>

        </>


    )
}

export default Navbar;
