import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <div>
            <section class="contact">
                <div class="content">
                    <h2>Contact Us</h2>
                </div>
                <div class="container">
                    <div class="contactinfo">
                        <div class="phonere" onclick="window.open('tel:+917306795119');">
                            <div class="box">
                                <div class="icon"><i class="fas fa-phone"></i></div>
                            </div>
                            <div class="text">
                                <a href="tel:+917306795119" class="contact-data">+91 7306795119</a>
                            </div>
                        </div>
                        <div class="mailre" onclick="window.open('mailto:jayakrishnans2041@gmail.com');">
                            <div class="box">
                                <div class="icon"><i class="fas fa-envelope"></i></div>
                            </div>
                            <div class="text">
                                <a href="mailto:jayakrishnans2041@gmail.com" class="mail-data">jayakrishnans2041@gmail.com</a>
                            </div>
                        </div>
                        <div class="box">
                            <div class="icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="marker">
                                
                            </div>
                        </div>
                        <div class="smedia">
                            <div class="smedia">
                                <div class="facebook">
                                    <a href="https://www.facebook.com/ceczealous/" class="icon-link"><i class="fab fa-facebook"></i></a>
                                </div>
                            </div>
                            <div class="smedia">
                                <div class="instagram">
                                    <a href="https://www.instagram.com/zealouscec/?hl=en" class="icon-link"><i class="fab fa-instagram" id="insta"></i></a>
                                </div>
                            </div>
                            <div class="smedia">
                                <div class="youtube">
                                    <a href="https://www.youtube.com/channel/UCjNm_V23UkeU3lzFT_fcTiA" class="icon-link"><i class="fab fa-youtube" id="yout"></i></a>
                                </div>
                            </div>    
                            <div class="smedia">
                                <div class="twitter">
                                    <a href="https://twitter.com/zealouscec" class="icon-link"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>        
                        </div>
                    </div>
                    <div class="contactform">
                        <h2>Send Message</h2>
                        <form action="" method="post">
                            <div class="inputbox">
                                <input type="text" name="" required="required" />
                                <span>Full Name</span>
                            </div>
                            <div class="inputbox">
                                <input type="text" name="" required="required" />
                                <span>Phone Number</span>
                            </div>
                            <div class="inputbox">
                                <input type="email" name="" required="required" />
                                <span>Email</span>
                            </div>
                            <div class="inputbox">
                                <textarea required="required"></textarea>
                                <span>Type your Message</span>                        
                            </div>
                            <div class="inputbox" >
                                <button type="submit">Send</button>
                            </div>
                        </form> 
                    </div>
                </div>    
            </section>
        </div>
    )
}
