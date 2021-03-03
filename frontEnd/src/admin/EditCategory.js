import React from 'react'

export default function EditCategory() {


    const [values, setvalues] = useState({
        updatedCategoryStatus:"",
        name:"Category",
        error:"",
        success:false,
        cateID:""
    })
    const {updatedCategoryStatus,name,error,success,cateID} = values;
    const onHandle = name => event => {
        setvalues({...values,[name]:event.target.value})
  }
  useEffect(() => {
    onLoad(match.params.cateId);
  }, []);

  const onLoad = cateId => {
    getaCategory(cateId).then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          
            console.log("++",data);
            setvalues({...values,name:data.name,cateID:data._id,updatedCategoryStatus:data})
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
            
        </div>
    )
}
