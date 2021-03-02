import React,{useState,useEffect} from 'react'
import ImageHelper from '../core/helper/ImageHelper'
import { allStores } from './helper/adminapicall'



export default function AllStore() {

    useEffect(() => {
        loadStores()
    }, [])
    const [datas, setdatas] = useState([])
    const loadStores = () => {
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
    return (
        <div>
            <h1>All Stores</h1>
            <p>
            {datas.map((i)=>{
                return(
                <div className="container">
                    <p>{i._id}</p>
                    <ImageHelper product={i}/>
                    <div className="rounded">
      <img
        src={i.photo.data}
        alt="photo"
        style={{ maxHeight: "20vh", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
      
    </div>
 <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{i.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{i.stype}</h6>
    <p className="card-text">{i.description}</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
<br/>
                </div>
               
       
                    )
            })}
            </p>
        </div>
    )
}
