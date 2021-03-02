import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import { createAdmin } from './helper/adminapicall';

export default function CreateAdmin() {

    const [passcode, setpasscode] = useState(0);
    const handleChange = event => {

        setpasscode(event.target.value);
    };
    const create = (event) => {
        event.preventDefault();
        createAdmin(passcode).then(data => {
                if (data.error) {

                } else {
                    console.log(data);
                    if (data.userAlready) {

                    }
                }
            )


        }
        return ( <
            div className = "container text-center" >
            <
            h3 className = "mt-5" >
            Create Admin Using their Phone number

            <
            /h3>

            <
            div className = "mt-4" >
            <
            form >
            <
            div class = "form-group" >
            <
            label > Give their number < /label> <
            input type = "number"
            value = { passcode }
            class = "form-control"
            id = "exampleInputEmail1"
            aria - describedby = "emailHelp"
            onChange = { handleChange }
            /> < /
            div > <
            button type = "submit"
            class = "btn btn-primary"
            onClick = { create } > Create < /button> < /
            form > <
            /div> < /
            div >
        )
    }