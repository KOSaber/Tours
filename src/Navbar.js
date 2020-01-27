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
import Places from './Places'
import Contact from './Contact'
import TourGuy from './TourGuy'
import Login from './Login'




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
          <NavbarBrand> <Link to="/Home" className="NavLink">Home</Link> </NavbarBrand>
          <NavbarBrand> <Link to="/TourGuy" className="NavLink">Tour Guys</Link> </NavbarBrand>
          <NavbarBrand> <Link to="/Places" className="NavLink">Places</Link> </NavbarBrand>
          <NavbarBrand> <Link to="/Login" className="NavLink">Login</Link> </NavbarBrand>
          
          <NavbarBrand> <Link to="/contact" className="NavLink">Contact</Link> </NavbarBrand>
        </Container>
        </Navbar>

       


        <div>
        <Route path="/Home" component={Home} />
        <Route path="/TourGuy" component={TourGuy} />
        <Route path="/Places" component={Places} />
        <Route path="/Login" component={Login} />
        <Route path="/Contact" component={Contact} />
        </div>

     
      </Router>  
    );
  }
}

export default NavbarMain;
