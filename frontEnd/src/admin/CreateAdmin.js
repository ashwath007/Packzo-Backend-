import React,{useState} from 'react'
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import { createAdmin } from './helper/adminapicall';
import { useCookies } from 'react-cookie'
export default function CreateAdmin() {

    const [passcode, setpasscode] = useState(0);
    const [redirect, setredirect] = useState(false);
    const handleChange = event => {
     
      setpasscode(event.target.value);
    };

    const isRedirect = () => {
      if(redirect){
        return <Redirect to="/" />;
      }
    }
    const create = (event) => {
      event.preventDefault();
      createAdmin(passcode).then(data=>{
        if(data.error){
          console.log(data.error)
        }
        else{
          //store cookie
          console.log(data);
          localStorage.setItem('adminId', data.adminId);
          setredirect(true);
        }
      }
      )

       
    }
    return (
        <div className="container text-center"> 
                <h3 className="mt-5">
                    Create Admin Using their Phone number 

                </h3>
{isRedirect()}
                <div className="mt-4">
                <form>
  <div class="form-group">
    <label>Give their number</label>
    <input type="number" value={passcode} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={create}>Create</button>
</form>
                </div>
        </div>
    )
}
