import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import AddVehicle from "./AddVehicle";

function VehicleList() {

    const [vehicles, setVehicles] = useState([]);
    const navigate = useNavigate();
 
    useEffect(() => {
        fetchVehicles();
        
    }, []);
    function fetchVehicles(){
        axios.get('http://localhost:5000/vehicles')
            .then(response => {
                setVehicles(response.data);
            })
            .catch(error => {
                console.log('There was an error fetching the vehicles data!', error);
            });
    }


   
    function handleDelete(id){
        axios.delete(`http://localhost:5000/vehicles/${id}`)
        .then(()=>{
            fetchVehicles();
        })
        .catch(error=>{
            console.log('There was an error deleting the vehicle data!',error);
        })
    }
    function handleUpdate(id) {
        navigate(`/update-vehical/${id}`);
    }


    return (
        <div className="container mt-4">
            <h2 className="mb-4">Vehicle List</h2>
            {/* <AddVehicle></AddVehicle> */}
            <div className="row">
                {vehicles.map(vehicle => (
                    <div className="col-md-4 mb-4" key={vehicle.id}>
                        <div className="card h-100">
                            <img src={vehicle.image} className="card-img-top" height={250} alt={vehicle.name} />
                            <div className="card-body">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <p className="card-text">Price: ${vehicle.price}</p>
                                <p className="card-text">Mileage: {vehicle.mileage}</p>
                                <p className="card-text">Seats: {vehicle.seats}</p>
                                <p className="card-text">Color: {vehicle.color}</p>
                                <p className="card-text">Fuel: {vehicle.fuel}</p>
                                <p className="card-text">Gear: {vehicle.gear}</p>
                                <p className="card-text">Description: {vehicle.description}</p>
                                <button type="button" className="btn btn-danger me-2" onClick={()=>handleDelete(vehicle.id)}>Delete</button>
                                <button type="button" className="btn btn-primary" onClick={() => handleUpdate(vehicle.id)}>Update</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default VehicleList;
