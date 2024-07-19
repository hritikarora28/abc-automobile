// src/components/About.js
import React from 'react';

function About() {
  return (
    <div data-testid="about-content">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block mx-lg-auto img-fluid"
              alt="ABC Automobiles"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Welcome to ABC Automobiles</h1>
            <p className="lead">
              At ABC Automobiles, we pride ourselves on offering top-notch services for buying, selling, and
              repairing vehicles. With a commitment to excellence and customer satisfaction, we ensure you have a
              seamless experience from start to finish.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href="/vehicleList" className="btn btn-primary btn-lg px-4 me-md-2">
                Explore Vehicles
              </a>
              <a href="/contact" className="btn btn-outline-secondary btn-lg px-4">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top"
                height={300}
                alt="Our Showroom"
              />
              <div className="card-body">
                <h5 className="card-title">Our Showroom</h5>
                <p className="card-text">
                  Explore our extensive collection of vehicles, from the latest models to high-quality pre-owned
                  options. Our showroom is designed to help you find the perfect car for your needs.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 5 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://images.pexels.com/photos/248687/pexels-photo-248687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top"
                height={300}
                alt="Sell Your Car"
              />
              <div className="card-body">
                <h5 className="card-title">Sell Your Car</h5>
                <p className="card-text">
                  Looking to sell your vehicle? We offer competitive pricing and a hassle-free process to help you
                  get the best value for your car quickly and easily.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 10 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top"
                height={300}
                alt="Vehicle Repairs"
              />
              <div className="card-body">
                <h5 className="card-title">Vehicle Repairs</h5>
                <p className="card-text">
                  Our expert mechanics are here to provide reliable repair and maintenance services to keep your
                  vehicle running smoothly. From routine maintenance to major repairs, we’ve got you covered.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 15 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

