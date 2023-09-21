import React, { useRef, useEffect } from 'react';
import logo from '../../../src/logo-cdr.svg';
import './header.css';
import '../../styles/login.css'; 

import { useAuth0 } from "@auth0/auth0-react";

const nav__links = [
  {
    path: '#/',
    display: 'Home'
  },
  {
    path: '#/projects',
    display: 'Projects'
  },
  {
    path: '#/about',
    display: 'About'
  },
  {
    path: '#/services',
    display: 'Services'
  },
  {
    path: '#/trainings',
    display: 'Trainings'
  },
  {
    path: '#/blog',
    display: 'Blog'
  },
  {
    path: '#/casestudies',
    display: 'Case Studies'
  },
 
];

const Header = ({ theme, toggleTheme }) => {
  const {loginWithRedirect, logout, user, isLoading} = useAuth0();

  
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const headerFunc = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('header__shrink');
    } else {
      headerRef.current.classList.remove('header__shrink');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', headerFunc);
    return () => window.removeEventListener('scroll', headerFunc);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('menu__active');

  const handleBlogClick = () => {
    if (window.location.hash === '#/blog') {
      window.location.reload(); // Reload the page if already on the blog

    }
  };

  return (
    <header className='header' ref={headerRef}>
      <div className='container'>
        <div className='nav__wrapper'>
          <div className='image'>
            <img src={logo} width={150} height={100} alt="Logo" />
          </div>

          {/* navigation */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu'>
              {nav__links.map((item, index) => (
                <li className='menu__item' key={index}>
                  <a
                    href={item.path}
                    className="menu__link"
                    onClick={item.path === '#/blog' ? handleBlogClick : undefined}
                  >
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <span className="mobile_menu" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </div>

      {!isLoading && !user && (
        <button className="button" onClick={()=> loginWithRedirect()}>
          Login
        </button>
      )}

      {!isLoading && user && (
        <button className="button" onClick={()=> logout()}>
          Logout
        </button>
      )}
      
    </header>
  );
};

export default Header;
