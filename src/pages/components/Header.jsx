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

        // $('#parent-menu').hover(() => {
        //     console.log(htmlcssArrow)
        // })
    }

    render() {
        return (
            <nav style={{ backgroundColor: '#fff' }}>
                <div className="navbar">
                    <i className='bx bx-menu'></i>
                    <div className="logo"><a href="#">MOVIES WEB APP</a></div>
                    <div className="nav-links">
                        <div className="sidebar-logo">
                            <span className="logo-name">Logo</span>
                            <i className='bx bx-x' ></i>
                        </div>
                        <ul className="links">
                            <li><a href="">HOME</a></li>
                            <li id="parent-menu">
                                <a href="#">MENU</a>
                                <box-icon type="regular" name="chevron-down" className="boxiconcus" id="htmlcss-arrow"></box-icon>

                                {/* <i className='bx bxs-chevron-down htmlcss-arrow arrow'></i> */}
                                <ul className="htmlCss-sub-menu sub-menu">
                                    <li><a href="">CP, TP & ATP</a></li>
                                    <li><a href="">Topik/Materi</a></li>
                                    <li><a href="">Potensi Lokal Gudeg</a></li>
                                    <li><a href="">Refleksi</a></li>
                                </ul>
                            </li>
                            <li><a href="">KONTAK</a></li>
                            <li><a href="">PROFILE</a></li>
                            <li><a className="btn btn-dark-register text-white d-flex align-items-center h-50 d-flex align-items-center h-50" href="">DAFTAR</a></li>
                            <li><a className="btn btn-outline-secondary d-flex align-items-center h-50" href="">LOGIN</a></li>

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