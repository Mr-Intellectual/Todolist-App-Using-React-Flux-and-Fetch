// import React, { Component } from "react";

// export const Footer = () => (
// 	<footer className="footer mt-auto py-3 text-center">
// 		<p>
// 			Made with <i className="fa fa-heart text-danger" /> by{" "}
// 			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
// 		</p>
// 	</footer>
// );

import React, { Component } from "react";


export default function Footer() {
	return (
	<footer className="footer mt-auto pt-3 text-center">
		  <div className="d-flex justify-content-center mt-3 py-2 border-top bg-black text-white text-center ">
		<p className="col-md-4 my-auto py-2 text-muted">Copyright &copy; Reo Petersen, Jose Albuquerque</p>
	  </div>
	  </footer>
	);
  }