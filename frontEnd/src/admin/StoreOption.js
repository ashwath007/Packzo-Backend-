import React,{useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import adminlogo from "./helper/packzo_logo.png"
import "./StoreOption.css"
export default function StoreOption({match}) {

    useEffect(() => {
        
    }, []);
    const [storeID, setstoreID] = useState("")

    const onLoad = () => {
        getStoreData().then(data => {
            if(){

            }
            else{
                
            }
        })
    }

    return (
        <div>
            {/* <h5>{match.params.storeId}</h5> */}
            <div className="back">
        
<nav className="navbar navbar-light bg-white shadow-lg fixed-top">
  <a className="navbar-brand" href="#">
    <img src={adminlogo} width="40" height="50" alt="" loading="lazy"/>
  </a>
</nav>
<div className="adminmenu text-white fixed-top">
<ul className="nav justify-content-center">
    <div classNAme="mt-5">
        
    </div>
  <li className="nav-item">
    <a className="nav-link active text-white" href="/admin/shaji/dashboard/menu">Menu</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" href="/admin/shaji/dashboard/orders">Orders</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" href="#">Order Manage</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" href="#">Delivery</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" href="#">Account</a>
  </li>  <li className="nav-item">
    <a className="nav-link text-white" href="#">Manage Business</a>
  </li>
</ul>

        <div className="container">
          
        </div>
</div>
<div className="menucenter">
<main role="main" class="container">
        <div>

        </div>
  <form className="mt-5">
    <div class="my-3 p-3 adminop rounded shadow-sm">
      <h6 class="border-bottom border-gray pb-2 mb-0">Menu</h6>
      <Link to="/admin/shaji/dashboard/menu/create">
      <div class="media text-muted pt-3 "> 
        <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray text-white">
          <strong class="d-block text-gray-dark text-white">Add new Menu</strong>
          Here you can add the new menu items
        </p>
        
      </div>
      </Link>
      <Link to="/admin/shaji/dashboard/product/show">
      <div class="media text-muted pt-3"> 
        <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray text-white">
          <strong class="d-block text-gray-dark text-white">Update Menu</strong>
          Here you can add the new menu items
        </p>
        
      </div>
      </Link>
      <Link to="/">
      <div class="media text-muted pt-3"> 
        <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray text-white">
          <strong class="d-block text-gray-dark text-white">Tax and Price</strong>
          Here you can add the new menu items
        </p>
        
      </div>
      </Link>
      <Link to="/admin/shaji/dashboard/category/create">
      <div class="media text-muted pt-3"> 
        <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray text-white">
          <strong class="d-block text-gray-dark text-white">Create Category</strong>
          Here you can add the new menu items
        </p>
        
      </div>
      </Link>
      
      <Link to="/admin/shaji/dashboard/category/show">
      <div class="media text-muted pt-3"> 
        <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray text-white">
          <strong class="d-block text-gray-dark text-white">All Category</strong>
          Here you can see and update all category
        </p>
        
      </div>
      </Link>
      <small class="d-block text-right mt-3">
        <a href="#">All updates</a>
      </small>
    </div>
  
    <div class="my-3 p-3 bg-white rounded shadow-sm">
      <h6 class="border-bottom border-gray pb-2 mb-0">Delivery Fleets</h6>
      <Link to="/admin/shaji/dashboard/fleets/addfleets">
      <div class="media text-muted pt-3">
        <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <div class="d-flex justify-content-between align-items-center w-100">
            <strong class="text-gray-dark">Add Delivery Fleets (Delivery Boy Details)</strong>
            <a href="#">Follow</a>
          </div>
          <span class="d-block">Here you can able to add delivery person and their datails</span>
        </div>
      </div>
      </Link>
      <Link to="/admin/shaji/dashboard/fleets/editfleets">
      <div class="media text-muted pt-3">
        <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <div class="d-flex justify-content-between align-items-center w-100">
            <strong class="text-gray-dark">Edit Fleets</strong>
            <a href="#">Follow</a>
          </div>
          <span class="d-block">Here you can able to edit the delivery crew</span>
        </div>
      </div>
      </Link>
      
      <div class="media text-muted pt-3">
        <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <div class="d-flex justify-content-between align-items-center w-100">
            <strong class="text-gray-dark">Manage</strong>
            <a href="#">Follow</a>
          </div>
          <span class="d-block">@username</span>
        </div>
      </div>
      <small class="d-block text-right mt-3">
        <a href="#">All suggestions</a>
      </small>
    </div>
    </form>
  </main>

</div>
        </div>
        </div>

    )
}
