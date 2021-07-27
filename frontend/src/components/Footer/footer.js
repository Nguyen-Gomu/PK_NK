import React from 'react';
import PropTypes from 'prop-types';
import './footer.css'
Footer.propTypes = {
    
};

function Footer() {
    return (
        <footer>
            <div className="footer_container">
                <div className="footer__info">
                    <div className="row-1">
                        <ul className="row-1-list">
                            <li className="row-1-item"><a href="http://localhost:3000/home/faqs">FAQs</a></li>
                            <li className="row-1-item"><a href="http://localhost:3000/home/connect">CONNECT US</a></li>
                            <li className="row-1-item">ABOUT US</li>
                            <li className="row-1-item"><a href="http://localhost:3000/home/consignmentterm">CONSIGNMENT TERM</a></li>
                            <li className="row-1-item"><a href="http://localhost:3000/home/delivery">DELIVERY AND EXCHANGE</a></li>
                        </ul>
                    </div>
                    <div className="subscribe">
                        <h3 className="subscribe__title">SUBSCRIBE FOR NEWSLETTER</h3>
                        <p className="subscribe__item">Join us and take 10% off your first purchase.</p>
                        <p className="subscribe__item">Plus, you will get exclusive news about upcoming products & promotions.</p>
                    </div>
                </div>
                <div className="footer__copy">
                    <div className="social__link">
                        <ul className="social-list">
                            <a href="/"><li className="social__item"><i class="fab fa-facebook-f"></i></li></a>
                            <a href="/"><li className="social__item"><i class="fab fa-instagram"></i></li></a>
                        </ul>
                    </div>
                    <div className="copyright">
                        <small>Copyright © 2021, FRONT. Powered by Shopify</small>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;