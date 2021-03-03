import React,{useState} from 'react'
import { Link, Redirect } from 'react-router-dom';
import { createCategory } from './helper/adminapicall';

export default function CreateCategory({match}) {
    const ID = match.params.adminId;
    const [values, setvalues] = useState({
        createdCategory:"",
        name:"Category",
        error:"",
        description:"",
        success:false
    })
    const {createdCategory,name,error,success,description} = values;
    const successMessage = () => (
        <div
          className="alert alert-success mt-3"
          style={{ display: createdCategory ? "" : "none" }}
        >
          <h4>{createdCategory} created successfully</h4>
        </div>
      );
      const errorMessage = () => (
        <div
          className="alert alert-danger mt-3"
          style={{ display: error ? "" : "none" }}
        >
          <h4>{createdCategory} can't create category</h4>
        </div>
      );

      const onHandle = name => event => {
            setvalues({...values,[name]:event.target.value})
      }
      const goMenu = () => {
          if(success){
            
            return (
              <div className="container">
               <Link to="/admin/shaji/dashboard/menu">
               <button className="btn btn-warning btn-block rounded">
                  Menu
                </button></Link> 
              </div>
            )
              
            
          }
      }

      const onSubmit = event => {
        event.preventDefault();
    
        createCategory(values,ID).then(data => {
            
            if (data.error) {
                setvalues({...values,error:true})
            } else {
                setvalues({...values,createdCategory:true,success:true})
            }
          })
        };
    
    return (
        <div>
            <div className="container mt-5">
    {successMessage()}
    {errorMessage()}
<form action="" className="mt-5">

<div class="form-group">
<label >Create {name}</label>
<input onChange={onHandle("name")} type="text" name="name" class="form-control" id="exampleFormControlInput1" placeholder="Eg Indian,Chinese"/>
</div>
<div class="form-group">
<label >Create {name}</label>
<input onChange={onHandle("description")} type="text" name="description" class="form-control" id="exampleFormControlInput1" placeholder="Description about the product"/>
</div>
<button onClick={onSubmit} className="btn btn-warning btn-block rounded cen">
Create
</button>
</form>
<br/>
{goMenu()}

</div>
        </div>
    )
}
