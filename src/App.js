import React, { Component } from 'react';
import './App.css';

import NavbarMain from './Navbar'
import Footer from './Footer'


class App extends Component {
  render() {


    return (
      <div>
        
        <NavbarMain />

        
             {/* <div className='Card1'>
              //   <Card style={{ width: '15rem', margin: '1px' }} className="cardHov">
              //     <Card.Img variant="top" src="https://i.postimg.cc/zGfYvvSV/image.png" width="250" height="250" />
              //     <Card.Body>
              //       <Link to="/restaurants"><Card.Title class="appFont">Restaurants <img src={'https://i.postimg.cc/mD1NKHqH/cutlery.png'} width="40" height="40" /></Card.Title></Link>
              //     </Card.Body>
              //   </Card>
              // </div> */}
        

            

      
        <Footer/>

      </div>
    );
  }
} 
export default App;