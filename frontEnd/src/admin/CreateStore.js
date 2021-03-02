import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createStore } from "./helper/adminapicall";
import Base from "../core/Base";

export default function CreateStore() {
    const [values, setValues] = useState({
        name: "",
        description: "",
        stype: "",
        photo: "",
        categories: [],
        category:"",
        loading: false,
        error: "",
        createdStore: "",
        getaRedirect: false,
        formData: ""
      });

      const [adminID, setadminID] = useState("")
      const {
        name,
        description,
        stype,
        categories,
        category,
        loading,
        error,
        createdStore,
        getaRedirect,
        formData
      } = values


      const handleChange = name => event => {
            setValues({...values,[name]: event.target.value});

      }
      const onSubmit = (event) => {
        createStore(adminID,values).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
              } else {
                setValues({ ...values, categories: data, formData: new FormData() });
              }
        })
      }
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
      
    
          <button
            type="submit"
            onClick={onSubmit}
            className="btn btn-outline-success mb-3"
          >
            Create Product
          </button>
        </form>
      );

      const successMessage = () => (
        <div
          className="alert alert-success mt-3"
          style={{ display: createdStore ? "" : "none" }}
        >
          <h4>{createdStore} created successfully</h4>
        </div>
      );
        const preLoad = () => {
            const ID = localStorage.getItem('adminId');
            setadminID(ID)
        }

      useEffect(() => {
          preLoad()
      }, [])


    return (
        <div className="mt-5">
            <div className="text-center">
                <h2>
                    Create Store
                </h2>
            </div>
        <div className="mt-5 row text-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {createProductForm()}
        </div>
      </div>
      </div>

    )
}
