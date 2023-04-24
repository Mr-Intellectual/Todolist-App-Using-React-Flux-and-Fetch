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

import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export default function Home() {
  const { store, actions } = useContext(Context);

  return (


    <div className="px-3 my-4 bg-light rounded-3 text-center" style={{minWidth: '600px'}}>
      <div className="container-fluid py-3">
        <h1 className="display-5 fw-bold my-3" id="title">Welcome to the ToDo-List API!</h1>

        <div className="card mt-3">
          <div className="card-header">Begin by entering a username </div>
          <div className="card-body">
            <div className="form-group">
              <input type="text" className="form-control" id="userName" placeholder="Enter a Username" onChange={(e) => { actions.setUserNameHolder(e); actions.checkUserName() }} onKeyPress={(e) => actions.keyPress(e)} />
            </div>
            <button className="btn btn-sm btn-primary mx-1" onClick={(e) => actions.sendButton(e)}>Send</button>
            {/* <button className="btn btn-sm btn-warning mx-1" onClick={()=>{}}>Clear</button> */}

            <div id="postResult"></div>
          </div>
        </div>

        <Link to="/todoAPI">
          <button className="btn btn-primary btn-lg float-center mt-5 mb-3 p-1" type="button">
            Click Here to go to the API Database
          </button>
        </Link>
      </div>

      <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" id="myToast">
        <div className="toast-header">
          {/* <img src="..." className="rounded me-2" alt="..."/> */}
          <i className="fa-solid fa-stop text-danger"></i>
          <strong className="mx-auto">Alert!</strong>
          {/* <small className="text-muted">11 mins ago</small> */}
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body" id="toastBody">
          
        </div>
      </div>

     
    </div>
  )
};