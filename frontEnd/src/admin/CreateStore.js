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
        location:[],
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
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
      };
      const onSubmit = (event) => {
    event.preventDefault();

        createStore(adminID,formData).then(data => {
            if (data.error) {
                console.log(data.error);
                setValues({ ...values, error: data.error });
              } else {
                setValues({
                  ...values,
                  name: "",
                  description: "",
                  price: "",
                  photo: "",
                  loading: false,
                  createdStore: data.name
                });
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
                name="store logo"
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
          <textarea
              onChange={handleChange("stype")}
              name="photo"
              className="form-control"
              placeholder="Type of Store"
              value={stype}
            />
          </div>
      
    
          <button
            type="submit"
            onClick={onSubmit}
            className="btn btn-outline-success mb-3"
          >
            Create Store
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
