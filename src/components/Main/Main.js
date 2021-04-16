import React from 'react'
import './Main.scss'
import iPhoneX from './images/iPhoneX.png';
import Ellipse from './images/Ellipse.png';
import cleanDesign from './images/clean-design.png';
import secure from './images/secure.png';
import retina from './images/retina.png';



function Main() {
    return (
        <div className='page'>        
            <div className='main'>
                <div>
                    <span className='main--logo'>AppCo</span> 
                    <p className='main--title'><b>Brainstorming</b> for<br></br> desired perfect Usability</p>
                    <p className='main--text'>Our design projects are fresh and simple and will benefit<br></br> your business greatly. Learn more about your work!</p>
            
                    <button className='main--btnStats'>View Stats</button>
                </div>

                <div className="phone">
                    <img className='phone--body' src={iPhoneX} alt='phone' width='280' height='559'></img>
                    <img className="phone--shadow" src={Ellipse} alt='phone shadow'></img>
                </div>
            </div>

            <div className='content'>
                <p className='content--title'> Why <b>small business owners<br></br> love</b> AppCo</p>
                <p className='content--text'>Our design projects are fresh and simple and will benefit your business<br></br> greatly. Learn more about your work!</p>

                <ul className='adv'>
                    <li className='adv-item'>
                        <img className='adv-item--image' src={cleanDesign} alt='Clean design'></img>
                        <h3 className='adv-item--title'>Clean Design</h3>
                        <p className='adv-item--text'>Increase sales by showing true<br></br>dynamics of your website.</p>
                    </li>
                    
                    <li className='adv-item'>
                        <img className='adv-item--image' src={secure} alt='Clean design'></img>
                        <h3 className='adv-item--title'>Secure Data</h3>
                        <p className='adv-item--text'>Build your online store’s trust using<br></br>Social Proof & Urgency.</p>
                    </li>
                        
                    <li className='adv-item'>
                        <img className='adv-item--image' src={retina} alt='Clean design'></img>
                        <h3 className='adv-item--title'>Retina Ready</h3>
                        <p className='adv-item--text'>Realize importance of social proof in<br></br>customer’s purchase decision.</p>
                    </li>
                    </ul>
            </div>

            <div className='footer'>
                <div className='footer-input'>
                    <input className='footer-input--email' type="email" placeholder='Enter your email'/>
                    <button className='footer-input--button'>Subscribe</button>
                </div>



                <div className="footer-content">
                    <span className='footer-content--logo'>AppCo</span>
                    <span className='footer-content--rights'>All rights reserved by ThemeTags</span>
                    <span className='footer-content--copy'>Copyrights © 2019.</span>
                </div>

            </div>

                
            
        </div>

           

        
    )
}

export default Main
