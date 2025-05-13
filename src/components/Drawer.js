import React, { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@material-ui/core/styles';
import advlogo from '../assets/img/advlogo.png';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { Tooltip, } from '@mui/material';
import BaseLocal from './BaseLocal';
import { useHistory } from 'react-router-dom';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import useMediaQuery from '@mui/material/useMediaQuery';



import { useEffect } from 'react';

// const pages = ["Products", "Services", "ABoutUs", "ContactUs"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  let [username, setusername] = useState("")
  let { authStore } = useSelector((state) => state);
  const linklogin=BaseLocal+'\login'
  const history = useHistory();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));


  useEffect(() => {
    /////////////////////////////get lc
    try {
        var CryptoJS = require("crypto-js");
        var base64Key = "QWJjZGVmZ2hpamtsbW5vcA==";
        var key = CryptoJS.enc.Base64.parse(base64Key);
        if (localStorage.getItem("LsdItped")) {
            var decryptedData = CryptoJS.AES.decrypt(
                localStorage.getItem("LsdItped").replace("slashinurl", "/").replace("plusinurl", "+"),
                key,
                {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7,
                }
            );
            var decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);
        }
        setusername(decryptedText);
    } catch (error) {
        console.log(error)
    }
    /////////////////////////////get username
}, [])

const processLoginAction = () => {
    console.log("in AdminnavBarLogout")
    localStorage.clear()
    history.push("/deptadmin/LoginRequired")
};

const handleuserredirect =() =>{
  history.push('/adv/dashboard')
}       

  return (
    <React.Fragment>
      {/* <div style={{width:'100px'}}> */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      // style={{backgroundColor:'transparent'}}


      >
        <br></br>
        <div style={{ paddingTop: 'auto', paddingBottom: 'auto' }} align='center'>
          <a
            target="_blank"
            href="https://advservice.epramaan.gov.in/dashboard/">
            <img src={advlogo} width="80px" height='80px' />
          </a>
        </div>
        <br></br>
        <hr></hr>
        <List>
          {/* {pages.map((page, index) => ( */}
          <ListItemButton >
            <ListItemIcon>
              <ListItemText>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ backgroundImage: theme.dash.backgroundColor }}

                  >
                    <Typography variant="h9" style={{ color: theme.typography.color }}><b>About us</b></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h9">
                      <a href="/adv/whatisadv">  Aadhaar Data Vault(ADV)</a>

                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>


          <ListItemButton>
            <ListItemIcon>
              <ListItemText>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ backgroundImage: theme.dash.backgroundColor }}
                  >
                    <Typography variant="h9" style={{ color: theme.typography.color }}><b>Services</b></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h9">
                      <a href="/adv/advasservice">  Aadhaar Data Vault as Service</a>

                    </Typography>

                  </AccordionDetails>
                  <AccordionDetails>

                    <Typography variant="h9">
                      <a href="/adv/advassolution">  Aadhaar Data Vault as Solution</a>

                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>



          <ListItemButton>
            <ListItemIcon>
              <ListItemText>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ backgroundImage: theme.dash.backgroundColor }}
                  >
                    <Typography variant="h9" style={{ color: theme.typography.color }}><b>Contact us</b></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h9">
                      <a href="/adv/contact">Contacts</a>

                    </Typography>

                  </AccordionDetails>
                  <AccordionDetails>

                    <Typography variant="h9">
                      <a href="/adv/resources">Resources</a>

                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>



          <ListItemButton>
            <ListItemIcon>
              <ListItemText>

                {/* <Button variant="contained" style={{ backgroundColor: theme.login.backgroundColor, color: theme.typography.color }}>Login</Button> */}



                {!authStore.loginStatus &&
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title='login'>
                      <IconButton sx={{ p: 0 }} size='large' >
                        <a href={linklogin}> <AccountCircleTwoToneIcon style={{ color: 'white', width: isSmallScreen ? '60px' : '100px', height: '45px', paddingTop: '0px', paddingBottom: '0px', right: '0px' }} />
                        <Button variant="outlined" style={{margin:'black' }}>Login</Button></a>

                      </IconButton>
                    </Tooltip>


                  </Box>
                }
                {authStore.loginStatus &&
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title={username}>
                      <IconButton sx={{ p: 0 }} size='large' onClick={processLoginAction} >

                        <AccountCircleTwoToneIcon style={{ color: 'black', width: isSmallScreen ? '60px' : '100px', height: '45px', paddingTop: '0px', paddingBottom: '0px', right: '0px'}} />
                      </IconButton>
                    </Tooltip>
                    <Button variant="contained"
                      style={{ color: 'white' }}
                      id="fade-button"
                      onClick={processLoginAction}

                    >
                      Logout
                    </Button>

                  </Box>
                }
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          {/* ))} */}
        </List>
      </Drawer>
      {/* </div> */}
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
