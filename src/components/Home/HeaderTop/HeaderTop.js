import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';
const HeaderTop = () => {
    return (
        <container style={{height:"600px"}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1 mx-5">
                <h1>Your New Smile <br/>Starts From Here</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima
                </p>
                <Link to="/appointment" className="btn btn-primary"> GET STARTED</Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={chair} className="img-fluid" alt=""/>
            </div>
        </container>
    );
};

export default HeaderTop;