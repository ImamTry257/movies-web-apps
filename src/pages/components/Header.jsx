import React from "react"
import '../../assets/css/header.css'
import '../../assets/css/bootstrap.min.css'
import 'boxicons'
import $ from 'jquery'

class Header extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let navLinks = document.querySelector(".nav-links");

        let htmlcssArrow = document.querySelector("#htmlcss-arrow");

        htmlcssArrow.onmouserhover = function () {
            console.log('test disini', navLinks)
            navLinks.classList.toggle("show1");
        }
    }

    render() {
        return (
            <nav style={{ backgroundColor: '#fff' }}>
                <div className="navbar">
                    <i className='bx bx-menu'></i>
                    <div className="logo"><a href="#">Nonton Yuk</a></div>
                    <div className="nav-links">
                        <div className="sidebar-logo">
                            <span className="logo-name">Logo</span>
                            <i className='bx bx-x' ></i>
                        </div>
                        <ul className="links">
                            <li><a href="">Home</a></li>
                            <li id="parent-menu">
                                <a href="#">Genre</a>
                                <box-icon type="regular" name="chevron-down" className="boxiconcus" id="htmlcss-arrow"></box-icon>

                                {/* <i className='bx bxs-chevron-down htmlcss-arrow arrow'></i> */}
                                <ul className="htmlCss-sub-menu sub-menu">
                                    <li><a href="">Action</a></li>
                                    <li><a href="">Advanture</a></li>
                                    <li><a href="">Animasi</a></li>
                                    <li><a href="">Crime</a></li>
                                </ul>
                            </li>


                            <li><a href="">Populer</a></li>
                            <li><a href="">Negara</a></li>

                        </ul>
                    </div>
                    <div className="search-box">
                        <i className='bx bx-search'></i>
                        <div className="input-box">
                            <input type="text" placeholder="Search..." />
                        </div>
                    </div>
                </div>
            </nav >

        )
    }
}

export default Header;