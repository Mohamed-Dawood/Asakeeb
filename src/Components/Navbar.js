import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCircleUser,
  faHome,
  faStar,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <nav className="container">
        <div className="logo">
          <NavLink to="/">اساكيب</NavLink>
        </div>
        <div className="bars" onClick={toggleSideNav}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul>
          <li>
            {' '}
            <NavLink to="/">الرئيسية</NavLink>
          </li>
          <li>
            <NavLink to="/about">عنا</NavLink>
          </li>
          <li>
            <NavLink to="/prices">الأسعار</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="whysite">
              <NavLink to="/whysite">لماذا الموقع؟</NavLink>
            </NavLink>
          </li>
          <li>تواصل معنا</li>
          <li>
            <Button btnText="خطط الأسعار" btnColor="#f25754">
              <FontAwesomeIcon icon={faStar} />
            </Button>
          </li>
          <li>
            <FontAwesomeIcon icon={faHome} />
          </li>
        </ul>
      </nav>

      <div className={`side-nav ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSideNav}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul>
          <li>
            <NavLink to="/">الرئيسية</NavLink>
          </li>
          <li>
            <NavLink to="/about">عنا</NavLink>
          </li>
          <li>
            <NavLink to="/prices">الأسعار</NavLink>
          </li>
          <li>
            <NavLink to="whysite">لماذا الموقع</NavLink>
          </li>
          <li>تواصل معنا</li>
          <li>
            <Button btnText="خطط الأسعار" btnColor="#f25754">
              <FontAwesomeIcon icon={faStar} />
            </Button>
          </li>
          <li>
            <Button btnText="حسابي" btnColor="#f25754">
              <FontAwesomeIcon icon={faCircleUser} />
            </Button>
          </li>
        </ul>
      </div>

      {isOpen && <div className="overlay" onClick={toggleSideNav}></div>}
    </div>
  );
}

export default Navbar;
