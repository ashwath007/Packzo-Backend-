import React,{useState,useEffect} from 'react'
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
            <h1>Hello here</h1>
            <p>
            {datas.map((i)=>{
                return(<h2>{i.name}</h2>)
            })}
            </p>
        </div>
    )
}
