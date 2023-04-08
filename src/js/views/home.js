// import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
// import "../../styles/home.css";

// export const Home = () => (
// 	<div className="text-center mt-5">
// 		<h1>Hello Rigo!</h1>
// 		<p>
// 			<img src={rigoImage} />
// 		</p>
// 		<a href="#" className="btn btn-success">
// 			If you see this green button, bootstrap is working
// 		</a>
// 	</div>
// );

import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (

	<div className="px-3 my-4 bg-light rounded-3 text-center">
        <div className="container-fluid py-3">
        <h1 className="display-5 fw-bold my-3" id="title">Welcome to the ToDo List!</h1>
        <p className="col-md-12 fs-4 mx-auto my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magni vel aliquid, natus laudantium a beatae adipisci ab quam soluta pariatur, blanditiis totam corrupti sint suscipit! Dolor nam perferendis voluptatibus.
        </p>
        <Link to="/todo">
          <button className="btn btn-primary btn-lg float-center mt-5 mb-3" type="button">
            Click Here Start Entering Into The ToDo List
          </button>
        </Link>
      </div>
    </div>
	  
);