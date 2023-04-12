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
        <h1 className="display-5 fw-bold my-3" id="title">Welcome to the ToDo-List API!</h1>
       
        <div className="card mt-3">
        <div className="card-header">Begin by entering a username </div>
        <div className="card-body">
          <div className="form-group">
            <input type="text" className="form-control" id="post-title" placeholder="Enter a Username"/>
          </div>
          <button className="btn btn-sm btn-primary mx-1" onClick={()=>{}}>Send</button>
          {/* <button className="btn btn-sm btn-warning mx-1" onClick={()=>{}}>Clear</button> */}

          <div id="postResult"></div>
        </div>
      </div>
       
        <Link to="/todoAPI">
          <button className="btn btn-primary btn-lg float-center mt-5 mb-3 p-1" type="button">
            Click Here to go to the API Database.
          </button>
        </Link>
      </div>
      
    </div>
	  

    
);