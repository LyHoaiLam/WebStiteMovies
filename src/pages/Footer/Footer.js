import './Footer.css'

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import IconMovie from '../../Images/IconMovies.png';
import iconFim from '../../Images/IconMovies.png'



function Footer() {
    return (
        <div className='footer'>
            <h3 className='color-text text-01'>hoailam03999@gmail.com</h3>
            <h3 className='color-text'>Sđt: 0362685068</h3>
            <h3 className='color-text text-last'>Sđt: Đc: phường 11, Quận 11, Tân Bình, tp Hồ Chí Minh</h3>
            <div className='div-footer02'>
            
                <div>
                    <FontAwesomeIcon className='icon-mxh' icon={faFacebook} size="2x" />
                    <FontAwesomeIcon className='icon-mxh' icon={faTiktok} size="2x" />
                    <FontAwesomeIcon className='icon-mxh' icon={faYoutube} size="2x" />
                    <FontAwesomeIcon className='icon-mxh' icon={faInstagram} size="2x" />
                </div>

                <div>
                    <img className='icon-Footer' src={iconFim} />
                </div>
            </div>

            <div>
                <p className='text-footer'>
                        Apple TV+ is a streaming service from features exclusive Apple Original
                        shows and movies from some of the industrys top talent,
                      <br></br>
                        arriving each all of the available content on Apple TV+ inside the Apple TV app on the Apple TV tab or here on
                      <br></br>
                        Apple TV+ is a streaming service from features exclusive Apple Original
                        shows and movies from some of the industrys top talent,
                        <br></br> arriving each all of the available content on Apple TV+ inside the Apple TV app on the Apple TV tab or here on 
                </p>
            </div>
                
        </div>
    )
}

export default Footer