import React,{useState,useEffect} from 'react'
import ImageHelper from '../core/helper/ImageHelper'
import { allStores,deleteStoreHere } from './helper/adminapicall'
import adminlogo from "./helper/packzo_logo.png"
import "./StoreOption.css"
import { Link } from "react-router-dom";

export default function AdminDash({match}) {
    return (
        <div>
            <div className="menucenter">
<main role="main" class="container">
        
  <form className="mt-5">
    <div class="my-3 p-3 adminop rounded shadow-sm">
      <h6 class="border-bottom border-gray pb-2 mb-0">Menu</h6>
      <Link to="/createAdmin">
      <div class="media text-muted pt-3 "> 
        <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray text-white">
          <strong class="d-block text-gray-dark text-white">Create Admin User</strong>
          Crate Admin User to access all options
        </p>
        
      </div>
      </Link>
      <Link to="/admin/packzo/CreateStore">
    
      <div class="media text-muted pt-3"> 
        <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray text-white">
          <strong class="d-block text-gray-dark text-white">Create Store</strong>
          Here you can add the new Product items
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
        {/* http://localhost:8000/api/admin/adminId/product/createproduct/storeId */}
      </div>
      </Link>
      <Link to="/admin/packzo/AllStore">
      <div class="media text-muted pt-3"> 
        <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray text-white">
          <strong class="d-block text-gray-dark text-white">Show All Store</strong>
          Here you can add the new menu items
        </p>
        
      </div>
      </Link>
      
      <Link to={`/admin/${match.params.adminId}/allCategory`}>
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
    )
}
