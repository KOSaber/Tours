import React, { Component } from 'react';
import { Card } from 'react-bootstrap/';
import guide from './DB' //Import the file where the data is stored.
import { Container, Row} from 'react-bootstrap/';
import Rater from 'react-rater';
import {
    Link
  } from 'react-router-dom';


class TourGuy extends Component {


    render() {
     
        const AllCities=guide.map((item, index) => {

          
            return <div key={index} className='Card'>
           <div className='ContainerHomeCity'>
               
                <Card style={{ width: '15rem', margin: '2px', marginBottom: '30px' }} className="cardHov">
                    {/* Add onClick event handler to the name and an image of the place */}

                    <Card.Img variant="top" src={item.imgSrc} width="250" height="250" />
                    <Card.Body>
                    {/* {item.city} */}
                    <Link to="/TourGayProfile">Tour Guy Name</Link>
                    <Card.Body>Brand Statement For The Tour Guy</Card.Body>
                    <Rater total={5} rating={0} interactive={true} onRate={Event} onRating={true} /> &nbsp;
                    <Link to="/Comment"> <img src={'https://i.postimg.cc/3NQ9Fmr5/blog.png'} width="30" height="30" /></Link>
                   
                    {/* <Rater total={5} rating={2} style={{cursor:'pointer'}}/> */}
                    {/* ,{ react-rater-link:'#ccc' !default} ,{react-rater-hover: #666 !default},{react-rater-active: #000 !default} */}
                    </Card.Body>
                </Card>
            </div>
            </div>
        })   
        return (
        <div>
         <div className='ContainerHomeSearch'>
             <img className='TourGayHomeImg' src={'https://i.postimg.cc/CMcw8xKf/Screen-Shot-2020-01-28-at-2-18-16-PM.png'} width="100%" height="50%"/>
             <div className="searchCont">
             <p className='HomeText'>Privileged Access With The Best Tour Guys</p>
             </div>
             
          </div>  
            <Container>
              
            <Row>
                  {/* render the list of city generated in the render method above */}
                  {AllCities}
            </Row>
        </Container>
        </div>
        )   
    }
}
export default TourGuy;