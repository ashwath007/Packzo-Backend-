import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { getallCategory,deleteCategory,getaCategory,updateCategory } from './helper/adminapicall';

export default function EditCategory({match}) {

    const ID = localStorage.getItem("adminId");
    const [values, setvalues] = useState({
        updatedCategoryStatus:"",
        name:"Category",
        description:"",
        error:"",
        success:false,
        cateID:""
    })
    const {updatedCategoryStatus,name,error,success,cateID,description} = values;
    const onHandle = name => event => {
        setvalues({...values,[name]:event.target.value})
  }
  useEffect(() => {
    onLoad(match.params.adminId,match.params.cateId);
  }, []);

  const onLoad = (adminId,cateId) => {
    getaCategory(adminId,cateId).then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          
            console.log("++",data.data.name);
            setvalues({...values,name:data.data.name,cateID:data.data.name._id,description:data.data.description,updatedCategoryStatus:data.data})
        }
      });

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

const onUpdate = event => {
    event.preventDefault();
    updateCategory(ID,match.params.cateId,values).then(data => {
        if(data.error){
            setvalues({ ...values, error: data.error ,success:false});
            console.log(data.error);
        }
        else{
            console.log(">>>",data);

            setvalues({...values,updatedCategoryStatus:data,success:true})
        }
    })
    
    };
const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: success ? "" : "none" }}
    >
      <h4>{success} created successfully</h4>
    </div>
  );
    return (
        <div>
             <div className="container">
                    {successMessage()}
                
                <form action="" className="">

<div class="form-group">
    <label >Edit Category {name}</label>
<input onChange={onHandle("name")} type="text" name="name" value={name} class="form-control" id="exampleFormControlInput1" placeholder="Eg Indian,Chinese"/>
</div>
<div class="form-group">
    <label >Edit description: {description}</label>
<input onChange={onHandle("description")} type="text" name="name" value={description} class="form-control" id="exampleFormControlInput1" placeholder="Eg Indian,Chinese"/>
</div>
<button onClick={onUpdate} className="btn btn-info btn-block rounded cen">
Create
</button>
</form>
<br/>
{goMenu()}
                </div>
        </div>
    )
}
