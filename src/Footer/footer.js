import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="title col-md-6">
                            <h1>Be the first to know</h1>
                            <p className="footer-p">Sign up for updates from mettā muse.</p>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Enter your e-mail..." aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Subscribe</button>
                            </form>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="head col-md-4">
                            <h5>CONTACT US</h5>
                            <p>+44 221 133 5360</p>
                            <p>customercare@mettamuse.com</p>
                            <h6>Currency</h6>
                            <img src="image/United States of America (US).jpg" alt=""></img>
                            <img src="image/Star 1.jpg" alt="" style={{paddingLeft: "6px"}} /> USD
                            <p className="para">Transactions will be completed in Euros and a currency reference is availableon.</p>
                        </div>
                        <hr style={{"height": "3px"}}>
                        </hr>
                        <div className="col-md-3 text-white">
                            <h4>mettā muse</h4>
                            <p>About Us <br></br>Stories <br></br> Artisans <br></br> Boutiques <br></br> Contact Us <br></br> EU Compliances Docs
                        </p>
                        </div>
                        <div className="col-md-3 text-white">
                            <h4>Quick Links</h4>
                            <p>Orders & Shipping <br></br>Join/Login as a Seller <br></br>Payment & Pricing <br></br> Return & Refunds<br>
                            </br>FAQs <br></br>Privacy Policy <br></br>Terms & Conditions</p>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-4 text-white">
                            <h4>Follow Us</h4>

                            <a href=""><i className="fa-brands fa-instagram"></i></a>
                            &nbsp;&nbsp;
                            <a href=""><i className="fa-brands fa-linkedin"></i></a>
                            <h6 className="metta">mettā muse Accepts</h6>
                            <img src="image/Group 136188.svg" alt="googlepy" width="50px" />
                            <img src="image/Group 136190.png" alt="mastercard" width="50px"></img>
                            <img src="image/Group 136192.jpg" alt="manycard" width="50px"></img>
                            <img src="image/Group 136193.jpg" alt="amex" width="50px"></img>
                            <img src="image/Group 136194.jpg" alt="applepay" width="50px"></img>
                            <img src="image/Group 136195.png" alt="pay" width="50px"></img>
                        </div>
                        <div className="col-md-12 text-center text-white">
                            <p>Copyright © 2023 mettamuse. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;