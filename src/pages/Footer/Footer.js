import './Footer.css'

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import IconMovie from '../../Images/IconMovies.png';
import iconFim from '../../Images/IconMovies.png'



function Footer() {
    return (
        <div className='footer'>
            <h3 className='color-text text-01'>Email: hoailam03999@gmail.com</h3>
            <h3 className='color-text'>Sđt: 0362685068</h3>
            <h3 className='color-text text-last'>Đc: phường 11, Quận 11, Tân Bình, tp Hồ Chí Minh</h3>
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
                Phimdev là một nền tảng web phim đa dạng và thu hút người dùng bởi sự đa dạng về nội dung và tính năng tiện ích. Nền tảng này cung cấp một kho phim phong phú, từ các bộ phim bom tấn mới nhất đến các bộ phim cổ điển được yêu thích.
                </p>
            </div>
                
        </div>
    )
}

export default Footer