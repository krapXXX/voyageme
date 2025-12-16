import { Link, Outlet, useLocation } from "react-router-dom";
import './ui/Layout.css'
import ButtonTypes from "../features/buttons/types/ButtonTypes";
import SiteButton from "../features/buttons/SiteButton";
import RequestBlock from "../component/RequestBlock";

export default function Layout() {
 
     const location = useLocation();
    const isHome = location.pathname === "/home" || location.pathname === "/";
    const isRequest = location.pathname ==="/home" ||location.pathname ==="/about"||location.pathname ==="/deals"
    return <>
        <header className={isHome ? "header-white" : "header-black"}>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand" title="Home Page" aria-label="Home Page">
                        <img src="/img/Logo.png" alt="Logo" width="140" height="33" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to="/about" className="nav-link " title="About Us" aria-label="About Us" >
                                    About Us
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/deals" className="nav-link " title="Hot deals" aria-label="Hot deals" >
                                    Hot deals
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/testimonials" className="nav-link " title="Testimonial" aria-label="Testimonial" >
                                    Testimonial
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/contacts" className="nav-link " title="Contacts" aria-label="Contacts" >
                                    Contacts
                                </Link>

                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item ">
                                <Link to="/contacts" className="nav-link " title="Contacts" aria-label="Contacts" >
                                    <i className="bi bi-telephone"></i>   +380673678654
                                </Link>
                            </li>
                        </ul>
                        <div className="navbar-btn ms-3">
                            <SiteButton  to="/deals" buttonType={isHome ? ButtonTypes.Blur : ButtonTypes.Black} text="Pick a Tour"/>

                        </div>

                    </div>
                </div>
            </nav>
        </header >
        <main ><Outlet /></main>

         {isRequest && ( <RequestBlock />)}
        <footer>
            <div className = "footer">
            <div className="footer-col">
                <img src="/img/Logo.png" alt="Logo" width="140" height="33" />
                <h4 style={{ marginTop: "30px", color: "#CAC8C3" }}>We create unforgettable travel
                    experiences. From beach escapes to cultural adventures,
                    our team helps you find the perfect trip — with expert
                    support, secure booking, and the best deals around the globe.</h4>
            </div>

            <div className="footer-col">
                <h3 style={{ color: "white" }}>Navigation</h3>
                <Link to="/home" className="nav-link " title="Home" aria-label="Home" >
                    <h4 style={{ marginTop: "20px", color: "#CAC8C3" }}>  Home</h4>
                </Link>
                <Link to="/about" className="nav-link " title="About Us" aria-label="About Us" >
          
                    <h4   style={{ color: "#CAC8C3" }}>  About Us</h4>
                </Link>
                <Link to="/deals" className="nav-link " title="Hot deals" aria-label="Hot deals" >
                    <h4   style={{ color: "#CAC8C3" }}> Hot deals</h4>
                </Link>
                <Link to="/testimonials" className="nav-link " title="Testimonial" aria-label="Testimonial" >
                    <h4   style={{ color: "#CAC8C3" }}> Testimonial</h4>
                </Link>
                
            </div>
            <div className="footer-col">
                <h3   style={{ color: "#CAC8C3" }}>  <Link to="/" className="nav-link " title="Contacts" aria-label="Contacts" >Contacts</Link></h3>
                <h4 style={{ marginTop: "20px",color: "#CAC8C3"  }}>
                    <i className="bi bi-pin"></i>17A Horizon Street, Office 304 Kyiv, 01001, Ukraine</h4>
                <h4   style={{ color: "#CAC8C3" }}> <i className="bi bi-telephone"></i>+380671215656</h4>
                <h4   style={{ color: "#CAC8C3" }}> <i className="bi bi-envelope"></i>voyageme.support@gmail.com</h4>
            </div>
            </div>
                            <img src="/img/LineF.png" style={{ width: "100%" }} />
            <h4 style ={{width:"100%", textAlign:"center", color: "#CAC8C3",padding:"40px"}}>© 2025 — VoyageMe</h4>
        </footer>
    </>
}