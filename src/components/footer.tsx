import React from "react";
import { Link } from "react-router-dom";


function Footer(){
    return(
        <footer className="footer">
        <div className=" footer-bottom">
            <div className="container">
                <div className="row">
           
                    <div className="col-md-12 d-flex justify-content-center text-md-start ">
                        <ul className="footer-menus  " >
                             <Link to="/search"><li className="text">search</li></Link>
                             <Link to="/my/packages"><li className="text">Packages own</li></Link>
                             <Link to="/#contact"><li className="text">Contact</li></Link>
                            <Link to="/about"><li className="text">About</li></Link>
                            <Link to="/#FAQs"><li className="text">FAQs</li></Link>   
                         
                        </ul>
                    </div>
                
                
                </div>
            </div>
        </div>
          
            <div className="footer-copy-right">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <p>© 2022 Courses All Rights Reserved.</p>
                        </div>
                        <div className="col-md-4 offset-md-3" >
                            <div className="d-flex justify-content-end terms-privacy">
                            <Link to="/#terms_and_condition"><p>Terms and conditions</p></Link>
                            <Link to="/#privacy"><p>Privacy</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;