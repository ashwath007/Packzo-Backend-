import React,{useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import { loadStoreData } from './helper/adminapicall';
import adminlogo from "./helper/packzo_logo.png"


export default function EditStore({match}) {
    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        location: "",
        photo: "",
        categories: [],
        stype: "",
        loading: false,
        error: "",
        createdProduct: "",
        getaRedirect: false,
        formData: new FormData()
      });
    
      const {
        name,
        description,
        location,
        stock,
        categories,
        stype,
        loading,
        error,
        createdProduct,
        getaRedirect,
        formData
      } = values;

     const onLoad = (storeId) => {
        loadStoreData(storeId).then(data => {
            if(data.error){
                    console.log(data.error)
            }
            else{
                console.log(data.storeData)
    setValues({
          ...values,
          name: data.storeData.name,
          description: data.storeData.description,
          stype: data.storeData.stype,
          location: data.storeData.location,
          formData: new FormData()
        });
            }
        })
    }
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
              onChange={handleChange("location")}
              type="number"
              className="form-control"
              placeholder="Price"
              value={location}
            />
          </div>
          
          <div className="form-group">
            <input
              onChange={handleChange("stype")}
              type="text"
              className="form-control"
              placeholder="Stock"
              value={stype}
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
      const handleChange = name => event => {
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
      };
    
    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });
        updateStore(match.params.storeId,match.params.adminId, formData).then(data => {
            if(data.error){

            }
            else{

            }
        })
        
      };
    useEffect(() => {
        onLoad(match.params.storeId)
    }, [])
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
        
        </div>
      </div>
      {successMessage}
  {createProductForm()}
                </div>
        </div>

    </div>
        </div>
    )
}
