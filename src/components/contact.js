import React, { Component } from 'react';
import Form from './form';


class Iletisim extends Component {
    
    render() {
        return (
            <section className="contact section-padding" data-scroll-index="6">
                <div className="container">
                    <div className="section-head">
                        <h3>İletişime geç</h3>
                    </div>

                    <div className="container col-md-offset-1 col-md-10">


                        <div className="info text-center mb-50">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="item">
                                        <span className="icon"><i className="fa fa-location-arrow" aria-hidden="true"></i></span>
                                        <h6>Adres</h6>
                                        <p>Gölcük / KOCAELİ</p>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="item">
                                        <span className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                        <h6>E-mail</h6>
                                        <p>ncmttnsrgn@hotmail.com</p>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="item">
                                        <span className="icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                                        <h6>Telefon</h6>
                                        <p>+90 531 735 36 76</p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <div >
                            <Form/>
                            <div style={{marginTop:"18px",textAlign:"center"}}><div id='emf_advertisement'><font face="Verdana" size="2" color="#cccccc">Powered by</font><span style={{position: "relative", paddingLeft: "3px",bottom: "-5px"}}><img alt="email" src="//assets.emailmeform.com/images/footer-logo.png?bWFzdGVy" /></span><font face="Verdana" size="2" color="#cccccc">EMF </font><a style={{textDecoration:"none"}} href="https://www.emailmeform.com/" target="_blank" rel="noopener noreferrer"><font face="Verdana" size="2" color="#cccccc">Online HTML Form</font></a></div></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default Iletisim;

