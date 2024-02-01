import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import IconMovie from '../../Images/IconMovies.png'
function Header() {

    const handleLogin = () => {
        alert('Bạn chưa Login')
    }
    return (
        <div className='header'>
        <div className='header-container01'>
            <img className='iconMovies' src={IconMovie} />
        </div>
        <div className='header-container02'>
            <input className='input-search' placeholder='Search'/>
            <button onClick={handleLogin} className='button-login'>
            <FontAwesomeIcon className='input-icon-user' icon={faUser} />
                Sign in
            </button>
        </div>
        </div>
    )
}

export default Header;
