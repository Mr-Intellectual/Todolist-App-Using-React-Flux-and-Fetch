// import React from "react";
// import { Link } from "react-router-dom";

// export const Navbar = () => {
// 	return (
// 		<nav className="navbar navbar-light bg-light mb-3">
// 			<Link to="/">
// 				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
// 			</Link>
// 			<div className="ml-auto">
// 				<Link to="/demo">
// 					<button className="btn btn-primary">Check the Context in action</button>
// 				</Link>
// 			</div>
// 		</nav>
// 	);
// };


import React from "react";
import { Link } from "react-router-dom";
import '../../styles/index.css'

export default function Navbar () {

	return (  


		
	<nav className="navbar navbar-expand-lg bg-black">
    <div className="container">
		
	<Link to="/">
	<div className="navbar-brand text-white fs-3" >Home</div>

	</Link>
	  <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"  id="navbarIcon" ></span>
          </button>
	  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto text-center ">
			<Link  className="nav-link text-white" to="/todoAPI">
      <p className="fs-6 m-0" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
        Todo-list-API
        </p>
			</Link>
			<Link  className="nav-link text-white" to="/table">
      <p className="fs-6 m-0" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
        Table
        </p>
			</Link>
      <Link  className="nav-link text-white" to="/detials">
      <p className="fs-6 m-0" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
        Details
        </p>
			</Link>
            </div>
          </div>
    </div>


	
  </nav>
  
  );
};
