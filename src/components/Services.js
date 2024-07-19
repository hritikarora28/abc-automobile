import './Services.css'; // Import the custom CSS file
import React from 'react';

const Services = () => {
  return (
    <div className="container mt-5" data-testid="services-content">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">Our Services</h2>
        </div>
        <div className="col-md-4 mt-4">
          <div className="card">
            <div className="card-img-wrapper">
              <img className="card-img-top" src="https://images.pexels.com/photos/7144186/pexels-photo-7144186.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Buy Car" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Buy Car</h5>
              <p className="card-text">We offer a wide range of new and used cars for you to choose from.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-4">
          <div className="card">
            <div className="card-img-wrapper">
              <img className="card-img-top" src="https://images.pexels.com/photos/4895416/pexels-photo-4895416.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sell Car" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Sell Car</h5>
              <p className="card-text">Sell your car with us at the best market prices. Quick and hassle-free process.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-4">
          <div className="card">
            <div className="card-img-wrapper">
              <img className="card-img-top" src="https://images.pexels.com/photos/17528100/pexels-photo-17528100/free-photo-of-man-fixing-car-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Repair Car" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Repair Car</h5>
              <p className="card-text">Our expert mechanics offer top-notch repair and maintenance services for your vehicle.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

