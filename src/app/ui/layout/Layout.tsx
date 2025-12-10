import { Link } from "react-router-dom";
import './ui/Layout.css'

export default function Layout() {
    return (
        <>
            <header >
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand" title="Home Page" aria-label="Home Page">
                          <img src = "/img/Logo.png" alt="Logo" width="140" height="33"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link " title="About Us" aria-label="About Us" >
                                        About Us
                                    </Link>
                                </li>

                                <li className="nav-item">

                                    <Link to="/" className="nav-link " title="Hot deals" aria-label="Hot deals" >
                                        Hot deals
                                    </Link>
                                </li>

                                <li className="nav-item">

                                    <Link to="/" className="nav-link " title="Testimonial" aria-label="Testimonial" >
                                        Testimonial
                                    </Link>
                                </li>

                                <li className="nav-item">

                                    <Link to="/" className="nav-link " title="Blog" aria-label="Blog" >
                                        Blog
                                    </Link>
                                </li>

                                <li className="nav-item">

                                    <Link to="/" className="nav-link " title="Contacts" aria-label="Contacts" >
                                        Contacts
                                    </Link>

                                </li>
                        </ul>
                    </div>

                     <div className="" id="navbarSupportedContent">
                            <ul className="navbar-nav ">
                          
                                <li className="nav-item ">
                                     <Link to="/" className="nav-link " title="Contacts" aria-label="Contacts" >
                                     <i className="bi bi-telephone"></i>   +380673678654
                                    </Link>
                                </li> 
                                
                                <li className="nav-item ">
                                     <Link to="/" className="nav-link " title="PickTour" aria-label="PickTour" >
       Button
        {/* <SiteButton buttonType={ButtonTypes.White} text="White Button" /> */}
                                    </Link>
                                </li>
                                </ul>
                    </div>
                </div>
            </nav>
        </header >
        </>
    );
}