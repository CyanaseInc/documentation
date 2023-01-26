 import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Image } from "atomize";



const Navbar =(isOpen, onClose ) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

 const [isactive, setactive] = useState('intro');
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
      
        <nav className= 'nav-menu active'>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='nav-text'>
          <img  className="logo"src="../image/logh.png"/>
            </li>
            <br></br><br></br>
            {SidebarData.map((item, index) => {
              return (
                <li isOpen={isOpen} onClose={onClose} key={index} className={` ${isactive ===`${item.active}` ? 'myactive nav-text' : 'nav-text'}`} onClick={() => {
      
        setactive(`${item.active}`);
        ({ isOpen, onClose });

        }}>
                  <Link to={item.path}>
                   {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
