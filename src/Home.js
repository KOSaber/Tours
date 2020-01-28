import React, { Component } from 'react';
import { MDBCol, MDBFormInline, MDBBtn,MDBInput,MDBIcon } from "mdbreact";
import CityList from './CityList' 




class Home extends Component{



  render() {
    return (
    
      <div className="AllHome">
          <div className='ContainerHome'>
           <img className='HomeImg' src={'https://imcdn.org/uploads/2018/12/tantoura1.jpg'} width="100%" height="50%"/>

            <div className="searchCont">
              <div>
                <p className='HomeText'>FIND YOUR ADVENTURE</p>
              </div>
              {/* Search bar */}
              <div className="search"> 
                  <MDBCol md="12">
                    <MDBFormInline className="form-inline md-form mr-auto mb-4">
                      <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                      <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="btn aqua-gradient btn-rounded btn-sm my-0">
                        Search
                      </MDBBtn>
                    </MDBFormInline>
                  </MDBCol>
              </div>
            </div>    

          </div>

        <CityList/>
        

      </div>
    );
  }

 
}


export default Home;

