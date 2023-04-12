import React, { useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
// import '../../styles/todo.css'

import { Context } from "../store/appContext";



export default function TodoAPI() {
  const { store, actions } = useContext(Context);

  useEffect(() => {

  }, []);


  return (
    //Some html code should go here
    <>
      {/* <div className="p-1 mt-2">
        <div className="p-4 mt-5">
          <div className="input-group mb-3" id="input">
            <input
              id="input1"
              type="text"
              className="form-control p-2"
              placeholder="What do you need to do...?"
              onChange={(e) => actions.setHolder(e)}
              onKeyPress={(e) => actions.keyPress(e)}
            />
            <button
              onClick={(e) => actions.checkIcon(e)}
              className="btn btn-outline-success"
              type="button"
              id="click"
            >
              <i className="fa-regular fa-square-check"></i>
            </button>
            {store.list.length !== 0 ? (
              <div id="lGoto">

                <Link className="rounded-end" to="/table" >
                  <button
                    className="btn btn-outline-primary p-2 rounded-0 rounded-end "
                    type="button"
                    id="goto"
                  >
                    <i className="fa-solid fa-share-from-square mr-2"></i>
                    Goto Table
                  </button>
                </Link>
              </div>) : ""}
          </div>
          <div className="input-group mb-1">
            <ul className="w-100 list-group">
              <>
                {store.list.length !== 0 ? (
                  store.list.map((item, index) => (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center  border border-2 border border-primary p-1"
                      key={index}
                    >
                      <p className="m-0 px-2 text-break">
                        {item["Task Info"]}
                      </p>
                      <button
                        onClick={() => actions.trashIcon(index)}
                        className=" btn btn-outline-danger btn-sm"
                        type="button"
                        id="trash"
                      >
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    </li>
                  ))
                ) : (
                  <li className="list-group-item d-flex justify-content-between align-items-center border border-2 border border-primary border border-3 p-2">
                    Please add some task to the list...
                  </li>
                )}
              </>
            </ul>
          </div>
        </div>
      </div> */}




<div className="container my-3" >
      <h3 className="text-center">Fetch Requests </h3>

      <div className="card mt-3">
        <div className="card-header">Fetch GET Request </div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            <button className="btn btn-sm btn-primary" onClick={()=>{}}>Get All</button>

            <input type="text" id="get-id" className="form-control ml-2" placeholder="Id"/>
            <div className="input-group-append">
              <button className="btn btn-sm btn-primary" onClick={()=>{}}>Get by Id</button>
            </div>

            <input type="text" id="get-title" className="form-control ml-2" placeholder="Title"/>
            <div className="input-group-append">
              <button className="btn btn-sm btn-primary" onClick={()=>{}}>Find By Title</button>
            </div>

            <button className="btn btn-sm btn-warning ml-2" onClick={()=>{}}>Clear</button>
          </div>   
          
          <div id="getResult"></div>
        </div>
      </div>

      {/* <div className="card mt-3">
        <div className="card-header">Fetch POST Request </div>
        <div className="card-body">
          <div className="form-group">
            <input type="text" className="form-control" id="post-title" placeholder="Title"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="post-description" placeholder="Description"/>
          </div>
          <button className="btn btn-sm btn-primary" onClick={()=>{}}>Post Data</button>
          <button className="btn btn-sm btn-warning" onClick={()=>{}}>Clear</button>

          <div id="postResult"></div>
        </div>
      </div> */}

      <div className="card mt-3">
        <div className="card-header">Fetch PUT Request </div>
        <div className="card-body">
          <div className="form-group">
            <input type="text" className="form-control" id="put-id" placeholder="Id"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="put-title" placeholder="Title"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="put-description" placeholder="Description"/>
          </div>
          <div className="form-check mb-2">
            <input type="checkbox" className="form-check-input" id="put-published"/>
            <label className="form-check-label" htmlFor="put-published">Publish</label>
          </div>
          <button className="btn btn-sm btn-primary" onClick={()=>{}}>Update Data</button>
          <button className="btn btn-sm btn-warning" onClick={()=>{}}>Clear</button>

          <div id="putResult"></div>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-header">Fetch DELETE Request </div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            <button className="btn btn-sm btn-danger" onClick={()=>{}}>Delete All</button>

            <input type="text" id="delete-id" className="form-control ml-2" placeholder="Id"/>
            <div className="input-group-append">
              <button className="btn btn-sm btn-danger" onClick={()=>{}}>Delete by Id</button>
            </div>

            <button className="btn btn-sm btn-warning ml-2" onClick={()=>{}}>Clear</button>
          </div>    
          
          <div id="deleteResult"></div>      
        </div>
      </div>

     
    </div>


      
    </>
  );
}