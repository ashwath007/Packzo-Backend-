import React,{useEffect,useState} from 'react'

export default function EditStore({match}) {

    onload = (storeId) => {
        loadStoreData(storeId).then(data => {
            if(data.error){

            }
            else{
                
            }
        })
    }

    useEffect(() => {
        onload(match.params.storeId)
    }, [])
    return (
        <div>
            
        </div>
    )
}
