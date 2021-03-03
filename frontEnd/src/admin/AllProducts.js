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
                console.log("Data:",data.data)

                setProducts(data.data)
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

    return (
       <div>
 <div className="container">
                <p>{products}</p>
                
                        
    
    
    
     
    
    
                </div>
       </div>
    )
}
