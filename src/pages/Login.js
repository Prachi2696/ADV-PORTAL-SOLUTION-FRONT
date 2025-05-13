import React from "react";
import Iframe from 'react-iframe'

export default function Login() {
    var url = "http://localhost:8080/login"
    // var url = "http://localhost:3000/adv/advasservice"


    return (
        <>
            <div  styles={{align:'center',paddingBottom:'300px'}}>
               
                <Iframe url={url}
                    width="100%"
                    height="900"
                    id=""
                   
                    className=""
                    display="block"
                    position="relative" />

            </div>
        </>

    );
}