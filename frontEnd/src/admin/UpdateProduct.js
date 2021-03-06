import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import adminlogo from "./helper/packzo_logo.png"

import {
  getCategories,
  getProduct,
  updateProduct
} from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper/index";

const UpdateProduct = ({ match }) => {

  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    photo: "",
    categories: [],
    category: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: ""
  });

  const {
    name,
    description,
    price,
    stock,
    categories,
    category,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData
  } = values;
  const getAllCategory = () => {
    getCategories().then(cates => {
        if(cates.error){
          setValues({ ...values, error: cates.error });
        }
        else {
        
          setValues({
            categories: cates[0],
            formData: new FormData()
          });
        }
    })
}
  const preload = productId => {
    getProduct(productId).then(data => {
      console.log(data.data.category);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        getAllCategory();
        setValues({
          ...values,
          name: data.data.name,
          description: data.data.description,
          price: data.data.price,
          category: data.data.category,
          stock: data.data.stock,
          formData: new FormData()
        });
      }
    });
  };


  useEffect(() => {
    preload(match.params.productId);
  }, []);

  //TODO: work on it
  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    updateProduct(match.params.productId,match.params.adminId, formData).then(
      data => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
            description: "",
            price: "",
            photo: "",
            stock: "",
            loading: false,
            createdProduct: data.name
          });
        }
      }
    );
  };

  const handleChange = name => event => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createdProduct ? "" : "none" }}
    >
      <h4>{createdProduct} updated successfully</h4>
    </div>
  );

  const createProductForm = () => (
    <form>
      <span>Post photo</span>
      <div className="form-group">
        <label className="btn btn-block btn-warning">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group">
        <textarea
          onChange={handleChange("description")}
          name="photo"
          className="form-control"
          placeholder="Description"
          value={description}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
        />
      </div>
      <div className="form-group">
        <select
          onChange={handleChange("category")}
          className="form-control"
          placeholder="Category"
        >
          <option>Select</option>
          {categories &&
            categories.map((cate, index) => (
              <option key={index} value={cate._id}>
                {cate.name}
              </option>
            ))}
        </select>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("stock")}
          type="number"
          className="form-control"
          placeholder="Stock"
          value={stock}
        />
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-warning mb-3"
      >
        Update Product
      </button>
    </form>
  );

  return (
    <div>
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
        
                <div>
         
      <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin Home
      </Link>
      <div className="row adminmenu text-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {createProductForm()}
        </div>
      </div>
  
                </div>
        </div>

    </div></div>
    
  );
};

export default UpdateProduct;
