import React,{useState,useEffect} from 'react'
import { getallCategory,deleteCategory } from './helper/adminapicall';
import { Link } from 'react-router-dom';

export default function AllCategory({match}) {
    
    const [categories, setCategories] = useState([]);

    const fetchCategories = () => {
        getallCategory().then(data => {
            if (data.error) {
              console.log(data.error);
            } else {
              console.log(data.categories)

              setCategories(data.categories);
            }
          });
    }

    const deleteThisCate = cateId => {
        const y = match.params.adminId;
        console.log(cateId)
        deleteCategory(y,cateId).then(data => {
          if (data.error) {
            console.log(data.error);
          } else {
            fetchCategories();
          }
        });
      };
    useEffect(() => {
        fetchCategories()
    }, [])


    return (
        <div className="container mt-5">
            {categories.map((i,cat)=>{
                return(
                    <div className="card mb-4 shadow rounded" key={i}>
  <div className="card-body">   
    <h5 className="card-title">{i.name}</h5>
  <Link to={`/admin/shaji/dashboard/category/edit/${i._id}`}>
    <button className="btn btn-success rounded">Edit</button>

  </Link>

    <button onClick={()=>{deleteThisCate(i._id)}} className="btn btn-danger rounded ml-4">Delete</button>



  </div>
</div>
                )
            })}
        </div>
    )
}
