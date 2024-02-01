import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
function Header() {
    return (
        <div className='header'>
        <div className='header-container02'>
            <input className='input-search' placeholder='Search'/>
            <button className='button-login'>
            <FontAwesomeIcon className='input-icon-user' icon={faUser} />
                Sign in
            </button>
        </div>
        </div>
    )
}


export default Header;
