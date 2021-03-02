import React,{useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import { createaProduct } from './helper/adminapicall';

import adminlogo from "./helper/packzo_logo.png"

export default function CreateProduct() {
    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        sold:"",
        photo: "",
        categories: [],
        category: "",
        loading: false,
        error: "",
        createdProduct: "",
        getaRedirect: false,
        formData: ""
      });
      const [adminID, setadminID] = useState("")
      const [storeID, setstoreID] = useState("")

      useEffect(() => {
          
      }, [])

      
      const {
        name,
        description,
        price,
        stock,
        sold,
        categories,
        category,
        loading,
        error,
        createdProduct,
        getaRedirect,
        formData
      } = values;
    
    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });
        createaProduct(storeID,adminID, formData).then(data => {
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
        });
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
          <h4>{createdProduct} created successfully</h4>
        </div>
      );
    const createProductForm = () => (
        <form>
          <span>Post photo</span>
          <div className="form-group">
            <label className="btn btn-block btn-success">
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
          <div className="form-group">
            <input
              onChange={handleChange("stock")}
              type="number"
              className="form-control"
              placeholder="Sold"
              value={sold}
            />
          </div>
    
          <button
            type="submit"
            onClick={onSubmit}
            className="btn btn-outline-success mb-3"
          >
            Create Product
          </button>
        </form>
    )






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
        
                <div className="container">
        {successMessage}
        {createProductForm}
                </div>
        </div>
        </div>
        </div>
    )
}
