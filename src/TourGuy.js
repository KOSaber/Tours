import React from 'react';
import guide from './DB' //Import the file where the data is stored.
import { Card } from 'react-bootstrap/';


function TourGuy() {
  return (
    <div className="TourGuy">
     
     {/* Page Content */}
     <div className="container">
        {/* Jumbotron Header */}
        <div className="bgpic jumbotron my-4 ">
        </div>
        {/* Page Features */}
        <div className="row text-center">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src="http://placehold.it/600x500" alt="" />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">More!</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src="http://placehold.it/600x500" alt="" />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">More!</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src="http://placehold.it/600x500" alt="" />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">More!</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src="http://placehold.it/600x500" alt="" />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">More!</a>
              </div>
            </div>
          </div>
        </div>
        {/* /.row */}
      </div>




    </div>
  );
}

export default TourGuy;
