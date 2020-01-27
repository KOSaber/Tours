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
          className="navDark">
             <Container className="AppIc">
              <NavbarBrand> <img src={'https://image.flaticon.com/icons/svg/1373/1373039.svg'} width="50" height="50" /> <span className='NavJed'>Tours</span></NavbarBrand>
        </Container>

       <Container className="AppIc">
          <NavbarBrand> <Link to="/Home">Home</Link> </NavbarBrand>
          <NavbarBrand> <Link to="/TourGuy">Tour Guys</Link> </NavbarBrand>
          <NavbarBrand> <Link to="/Places">Places</Link> </NavbarBrand>
          <NavbarBrand> <Link to="/contact">Contact</Link> </NavbarBrand>
        </Container>
        </Navbar>

       


        <div>
        <Route path="/Home" component={Home} />
        <Route path="/TourGuy" component={TourGuy} />
        <Route path="/Places" component={Places} />
        <Route path="/Contact" component={Contact} />
        </div>

     
      </Router>  
    );
  }
}

export default NavbarMain;
