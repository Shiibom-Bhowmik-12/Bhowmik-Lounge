import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4 bg-warning">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 style={{fontFamily:'Potta One,cursive',fontWeight:'bold',fontSize:'25px'}}className="text-uppercase"> <img style={{width:"38px",height:"35px"}} src="foot.png" alt=""/> Bhowmik Lounge</h5>
                <p style={{fontFamily:'Electrolize,sansSerif',fontWeight:'bold',fontSize:'20px'}}>"Taste that makes you go yummmmm."</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase"><u>Outlets</u></h5>
                <ul className="list-unstyled">
                    <li>Kolkata</li>
                    <li>Delhi</li>
                    <li>Bangalore</li>
                    <li>Punjab</li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase"><u>Social Links</u></h5>
                <ul className="list-unstyled">
                  <a href="https://www.linkedin.com/in/shibom-kumar-bhowmik-9709081b8/" target="_blank"><img style={{width:"46px",height:"34px",paddingRight:"10px"}} src="lnkd.png" alt=""/></a>
                  <a href="https://www.linkedin.com/in/shibom-kumar-bhowmik-9709081b8/" target="_blank"><img style={{width:"40px",height:"38px"}}  src="insta.png" alt=""/></a>
                  <a href="https://www.linkedin.com/in/shibom-kumar-bhowmik-9709081b8/" target="_blank"><img style={{width:"46px",height:"34px",paddingLeft:"10px"}} src="fb.png" alt=""/></a>
                  <li>Contact : +91 6289003494</li>
                </ul>
            </div>

        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 All Rights Reserved :
        <a href="https://www.linkedin.com/in/shibom-kumar-bhowmik-9709081b8/" target="_blank"> Bhowmik Lounge</a>
    </div>

</footer>

export default Footer