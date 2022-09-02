
import React from "react";
import { Div, Button, SideDrawer, Icon,Row, Text,Col, Image } from "atomize";
import Navbar from './Navbar';
import Topbar from './Topbar';
import Resbar from './Resbar';
import './Navbar.css';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


const SizeSideDrawer = ({ isOpen, onClose }) => {


  return (
    
    <SideDrawer isOpen={isOpen} onClose={onClose} w={{ xs: "100vw", sm: "16rem" }}>
       <Div> <p onClick={onClose} bg="info700">
          X
        </p>
      <Resbar/>
      </Div>
    </SideDrawer>
  );
};

class Drawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawer: false
    };
  }

  render() {
    const { showSideDrawer } = this.state;

    return (
      <>
<Topbar/>
        <div className='navbar'>
         <Link to='#' className='menu-bars'>
          <FaIcons.FaBars   onClick={() =>
            this.setState({
              showSideDrawer: true,
            })
          } />
          </Link> 
          <h1 class="brand">Cyanase Documentation </h1>
       
        </div>
       
         <Div>
         
         {/* Navigation content*/}
         <Navbar/>
         
         
         </Div>
        <SizeSideDrawer
          isOpen={showSideDrawer}
          onClose={() => this.setState({ showSideDrawer: false })}
        />
      </>
    );
  }
}

export default Drawer;