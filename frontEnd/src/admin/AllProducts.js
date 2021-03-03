import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProduct,getAllProducts } from "./helper/adminapicall";
import adminlogo from "./helper/packzo_logo.png"

export default function AllProducts({match}) {

    const preLoad = (storeId) => {
        getAllProducts(storeId).then(data => {
            if(data.error){
                    console.log(data.error)
                console.log("ERROR:")

            }
            else{
                console.log("Data:",data)

                setProducts(data)
            }
        })
    }
//  const deleteAProduct = prodId => {
//     deleteaProduct(prodId).then(data=>{
//         if(data.error){
//         setError(data.error);

//         }
//         else{
//             preLoad();
//         }
//     })

//   }

  

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
    useEffect(() => {
        preLoad(match.params.storeId)
    }, [])
    const deleteThisProduct = (productId) => {
    //http://localhost:8000/api/admin/${adminId}/product/deleteProducts/${productId}



        deleteThisProductFromStore(productId).then(data=>{
            if(data.error){

            }
            else{
                
            }
        })
    }
    return (
       <div>
 <div className="container">
        <h3>All Products</h3>
        {products.map((i,cat)=>{
                return(
                    <div className="card mb-4 shadow rounded" key={i}>
  <div className="card-body">   
    <h5 className="card-title">{i.name}</h5>
  <Link to={`/admin/${match.params.adminId}/editCategory/${i._id}`}>
    <button className="btn btn-success rounded">Edit</button>

  </Link>

    <button onClick={()=>{deleteThisProduct(i._id)}} className="btn btn-danger rounded ml-4">Delete</button>



  </div>
</div>
                )
            })}
                
                        
    
    
    
     
    
    
                </div>
       </div>
    )
}
