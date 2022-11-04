import burgericon from '../assets/svgs/burger.svg';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

export function NavBar() {
    return (
        <div className='nav-container'>
            <img src={burgericon} alt='burgericon' />
            <h2 className='nav-header'>BurgerMile</h2>
            <NavLink className='nav-link' to={'/'}>Home</NavLink>
            <NavLink className='nav-link' to={'/list'}>List view</NavLink>
            <NavLink className='nav-link' to={'/map'}>Map view</NavLink>
            <NavLink className='nav-link' to={'/store'}>Store</NavLink>
            <NavLink className='nav-link' to={'/catering'}>Catering</NavLink>
            <NavLink className='nav-link' to={'/about'}>About</NavLink>
        </div>
    );
}

export default NavBar