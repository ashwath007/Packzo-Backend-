import React from 'react'
import { Redirect } from 'react-router-dom';

export default function CreateAdmin() {
    return (
        <div className="container text-center"> 
                <h3 className="m3">
                    Create Admin Using their Phone number 

                </h3>

                <div>
                <form>
  <div class="form-group">
    <label>Give their number</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                </div>
        </div>
    )
}
