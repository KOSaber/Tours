import React, { Component } from 'react';
import { Card } from 'react-bootstrap/';
import guide from './DB' //Import the file where the data is stored.
import { Container, Row} from 'react-bootstrap/';
import TourGuy from './TourGuy'
import {
    Link
  } from 'react-router-dom';

class CityList extends Component {


    render() {
     
        const AllCities=guide.map((item, index) => {
            
            return <div key={index} className='Card'>
                <Card style={{ width: '15rem', margin: '2px', marginBottom: '30px' }} className="cardHov">
                    {/* Add onClick event handler to the name and an image of the place */}

                    <Card.Img variant="top" src={item.imgSrc} width="250" height="250" />
                    <Card.Body>
                    <Link to="/TourGuy">{item.city}</Link>
                    </Card.Body>
                </Card>
            </div>
        })   
        return (
            <Container>
            <Row>
                  {/* render the list of city generated in the render method above */}
                  {AllCities}
            </Row>
        </Container>
          
        )   
    }
}
export default CityList;