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


      <div className="container my-3"  style={{minWidth: '576px!important'}}>
        <h3 className="text-center">Fetch Requests </h3>

      <div className="text-center my-3 ">
        <div className="btn-group  " role="group" aria-label="Basic radio toggle button group">
          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
          <label className="btn btn-outline-primary rounded-start" htmlFor="btnradio1">GET</label>

          <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">PUT</label>

          <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
          <label className="btn btn-outline-primary rounded-end" htmlFor="btnradio3">DELETE</label>
        </div>
      </div>
{/* ====================================================== Start Get Request ==================================================================  */}
        {/* <div className="card mt-3">
          <div className="card-header text-center">Fetch GET Request </div>
          <div className="card-body">
            <div className="input-group input-group-sm">
            <button className="btn btn-sm btn-warning px-3 " onClick={() => { }}>Clear</button>
              <input type="text" id="get-id" className="form-control" placeholder="User" />
              <div className="input-group-append">
                <button className="btn btn-sm btn-primary mr-2" onClick={() => {actions.test() }}>Get Single User</button>
              </div>
              
              <button className="btn btn-sm btn-primary ml-2 px-3" onClick={() => {actions.fetchApiUsers() }}>Get All User from API</button>

            </div>

            <div id="getResult">
              
            </div>
          </div>
        </div>

<div className="row my-5">

<div className="col-4">
  <nav id="navbar-example3" className="navbar navbar-light bg-light flex-column align-items-stretch p-3">
    <a className="navbar-brand text-center" href="#">Navbar</a>
    <nav className="nav nav-pills flex-column">
      <a className="nav-link active" href="#item-1">4Geek API</a>
      <nav style={{ height: '100px', overflow: 'auto', display: 'block' }} className="nav nav-pills flex-column">
        <a className="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
        <a className="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
      </nav>
      <a className="nav-link" href="#item-3">My App API</a>
      <nav style={{ height: '100px', overflow: 'auto', display: 'block' }} className="nav nav-pills flex-column">
        <a className="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
        <a className="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
      </nav>
    </nav>
  </nav>
</div>

    <div className="col-8">
      <div style={{ height: '400px', overflow: 'auto' }} data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" className="scrollspy-example-2" tabIndex="0">
        <h4 id="item-1">Item 1</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h5 id="item-1-1">Item 1-1</h5>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h5 id="item-1-2">Item 1-2</h5>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h4 id="item-2">Item 2</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h4 id="item-3">Item 3</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h5 id="item-3-1">Item 3-1</h5>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h5 id="item-3-2">Item 3-2</h5>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      </div>
    </div>
  </div> */}

{/* ====================================================== End Get Request ==================================================================  */}

{/* ====================================================== End Put Request ==================================================================  */}

<div className="card mt-3">
          <div className="card-header text-center">Fetch PUT Request </div>
            <div className="row">

            <div className="col-4">
  <nav id="navbar-example3" className="navbar navbar-light bg-light flex-column align-items-stretch p-3">
    <a className="navbar-brand text-center" href="#">Navbar</a>
    <nav className="nav nav-pills flex-column">
      <a className="nav-link active" href="#item-1">4Geek API</a>
      <nav style={{ height: '100px', overflow: 'auto', display: 'block' }} className="nav nav-pills flex-column">
        <a className="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
        <a className="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
      </nav>
      <a className="nav-link" href="#item-3">My App API</a>
      <nav style={{ height: '100px', overflow: 'auto', display: 'block' }} className="nav nav-pills flex-column">
        <a className="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
        <a className="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
      </nav>
    </nav>
  </nav>
</div>
              
          <div className="card-body col-8">
            <div className="form-group">
              <input type="text" className="form-control" id="put-id" placeholder="User" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="put-title" placeholder="Title" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="put-description" placeholder="Description" />
            </div>
            {/* <div className="form-check mb-2">
              <input type="checkbox" className="form-check-input" id="put-published" />
              <label className="form-check-label" htmlFor="put-published">Publish</label>
            </div> */}
            <button className="btn btn-sm btn-primary" onClick={() => { }}>Update Data</button>
            <button className="btn btn-sm btn-warning" onClick={() => { }}>Clear</button>

            <div id="putResult"></div>
          </div>
            </div>
        </div>

{/* ====================================================== End Put Request ==================================================================  */}
   


      </div>



    </>
  );
}