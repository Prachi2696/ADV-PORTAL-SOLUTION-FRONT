import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Button, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableRow } from '@mui/material'
import { NavigateBefore } from "@material-ui/icons";



function CommonLogin() {
  // let navigate = useNavigate();
  const [roles, setRoles] = useState([]);

  function handleRoles(e){
    const role = e.target.value;
    alert(role)
    if(role=="d")
    {
      alert("your re in d ")
      window.open("/", "_blank", "height=200,width=200");

      window.open('/', '_blank', 'toolbar=0,location=0,menubar=0');
      window.open("/")
    
    }
  }

  useEffect(()=> {
    const fetchData = () =>  {
      fetch("http://localhost:8082/dept/getRoles")
      .then((res) => res.json())
      .then((res) => {
        setRoles(res);
      }).then(() => { console.log(roles) })
  
     
    }
  fetchData();
  }, [])


 
  return (
    <div>
      <br></br>
      <br></br>

      <FormControl style={{ minWidth: 170 }} >
        <InputLabel id="demo-simple-select-label">Operations </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"          
          label="Department List"
          onChange={handleRoles}
        >
          {roles?.map((item, index) => (
            <MenuItem key={index} value={item} >
              {item}
            </MenuItem>
          ))
          }         
        </Select>
      </FormControl>

      <br></br>
      <br></br>


      username : {}       
        <br></br>
        roles : {roles?.map((roles)=>(
          
          <div> <br></br>
            <h3>{roles}</h3>
            <br></br>
          </div>
        ))}
        <br></br>


      

    </div>
  );
}

export default CommonLogin;