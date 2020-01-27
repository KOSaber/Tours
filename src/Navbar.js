import React from "react";
import {
  Navbar,
  NavbarBrand,
  Container,
} from "reactstrap";
import "../src/App.css";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home'
import Packages from './Packages'
import Contact from './Contact'
import TourGuy from './TourGuy'
import Login from './Login'
import About from './About'




class NavbarMain extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      wether: '',
      icon: ''
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
   
    return (
      <Router>

        <Navbar
          color="faded"
          dark
          expand="md"
          fixed={`top`}
          className="navDark"
        >
             <Container className="AppIc">
              <NavbarBrand> <img src={'https://image.flaticon.com/icons/svg/1373/1373039.svg'} width="50" height="50" /> <span className='NavJed'>ShowMeSaudi</span></NavbarBrand>
        </Container>

       <Container>
          <NavbarBrand> <Link to="/" className="NavLink">Home</Link> </NavbarBrand>
          <NavbarBrand> <Link to="/TourGuy" className="NavLink">Tour Guys</Link> </NavbarBrand>
          <NavbarBrand> <Link to="/Packages" className="NavLink">Packages</Link> </NavbarBrand>
          <NavbarBrand> <Link to="/Login" className="NavLink">Login</Link> </NavbarBrand>
          <NavbarBrand> <Link to="/About" className="NavLink">About Us</Link> </NavbarBrand>
          <NavbarBrand> <Link to="/contact" className="NavLink">Contact</Link> </NavbarBrand>
        </Container>
        </Navbar>

       


        <div>
        <Route exact path="/" component={Home} />
        <Route path="/TourGuy" component={TourGuy} />
        <Route path="/Packages" component={Packages} />
        <Route path="/Login" component={Login} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        </div>

     
      </Router>  
    );
  }
}

export default NavbarMain;
