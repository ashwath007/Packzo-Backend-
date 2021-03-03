import React,{useState,useEffect} from 'react'
import ImageHelper from '../core/helper/ImageHelper'
import { allStores,deleteStoreHere } from './helper/adminapicall'
import adminlogo from "./helper/packzo_logo.png"
import "./StoreOption.css"



export default function AllStore() {

    useEffect(() => {
        loadStores()
    }, [])
    const [datas, setdatas] = useState([])
    const [adminID, setadminID] = useState("")
    const loadStores = () => {
        const ID = localStorage.getItem("adminId")
        setadminID(ID)
        allStores().then(data => {
            if(data.error){

            }
            else{
                console.log(data.stores)
                setdatas(data.stores)
                console.log(data.stores[0])

            }
        })
    }
    const showShops = () => {
        if(datas!=""){
            
        }
    }

    const deleteStore = (adminID,storeID) => {
          deleteStoreHere(adminID,storeID).then(done => {
              if(done.error){
                console.log(done.error)
                
              }
              else{
                console.log(done)
              }
          })
    }
    return (
        <div className="text-center">
            <div className="back">
        
        <nav className="navbar navbar-light bg-white shadow-lg fixed-top">
          <a className="navbar-brand" href="#">
            <img src={adminlogo} width="40" height="50" alt="" loading="lazy"/>
          </a>
        </nav>
        <div className="adminmenu text-white fixed-top">
        <ul className="nav justify-content-center">
    
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
            </div>
             
        </div>
            <h1>All Stores</h1>
            <p>
            {datas.map((i)=>{
                return(
                <div className="container text-white">
                  
    
           
     
    
 <div className="card ojoj" style={{width: "80%"}}>
  <div className="card-body">
    <h5 className="card-title">{i.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{i.stype}</h6>
    <p className="card-text">{i.description}</p>
    <a href={`/admin/${adminID}/store/option/${i._id}`} className="card-link">Store Option</a> 
      <br/>
   
</div>
<br/>
   </div>             </div>
               
       
                    )
            })}
            </p>
        </div>
    )
}
