
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
import SummarizeTwoToneIcon from '@mui/icons-material/SummarizeTwoTone';
// import IconButton from '@mui/material/IconButton';
import { Tooltip, Grid } from '@mui/material';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
// import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../assets/styles/font.css'
// import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import DrawerComp from "./Drawer";
import { useTheme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { useState, useContext } from 'react';
import { useEffect } from 'react';
import BaseLocal from './BaseLocal';
import { AuthContext } from '../App';
import LogoutIcon from '@mui/icons-material/Logout';


export default function NavbarShrink() {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    let { authStore } = useSelector((state) => state);
    let [username, setusername] = useState("")
    /////////////////////
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    // console.log(isMatch);


    ////////////////////

    // const { t } = useTranslation();
    // const classes = useStyles();
    const history = useHistory();


    const [isShown, setIsShown] = React.useState(false);

    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const [anchorEl3, setAnchorEl3] = React.useState(null);

    const handleMenu1Click = (event) => {
        setIsShown(true)
        setAnchorEl1(event.currentTarget);
    };

    const handleMenu2Click = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleMenu3Click = (event) => {
        setAnchorEl3(event.currentTarget);
    };

    const handleMenuClose = (setAnchorEl) => {
        // setIsShown(true);
        setAnchorEl(null);
        // history.push('https://advservice.epramaan.gov.in/dashboard/whatisadv')
    };

    const handleMenuCloseService = (setAnchorEl2) => {
        setAnchorEl2(null);
        history.push('/adv/advasservice')
    }
    const handleMenuCloseSolution = (setAnchorEl2) => {
        setAnchorEl2(null);
        history.push('/adv/advassolution')
    }
    const handleMenuCloseContact = (setAnchorEl2) => {
        setAnchorEl2(null);
        history.push('/adv/contact')
    }
    const handleMenuCloseResources = (setAnchorEl3) => {
        setAnchorEl3(null);
        history.push('/adv/resources')
    }
    const handleHome = (e) => {
        history.push('/deptadmin')
    }
    const handleuserredirect = () => {
        // history.push('/deptadmin')
    }

    const linklogin = BaseLocal + 'login'


    useEffect(() => {
        /////////////////////////////get lc
        // try {
        //     var CryptoJS = require("crypto-js");
        //     var base64Key = "QWJjZGVmZ2hpamtsbW5vcA==";
        //     var key = CryptoJS.enc.Base64.parse(base64Key);
        //     if (localStorage.getItem("LsdItped")) {
        //         var decryptedData = CryptoJS.AES.decrypt(
        //             localStorage.getItem("LsdItped").replace("slashinurl", "/").replace("plusinurl", "+"),
        //             key,
        //             {
        //                 mode: CryptoJS.mode.ECB,
        //                 padding: CryptoJS.pad.Pkcs7,
        //             }
        //         );
        //         var decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);
        //     }
        //     setusername(decryptedText);
        // } catch (error) {
        //     console.log(error)
        // }
        /////////////////////////////get username
    }, [])

    const processLoginAction = () => {
        console.log("in AdminnavBarLogout")
        history.push("/deptadmin/LoginRequired")
    };

    const processLogin = () => {
        console.log("in AdminnavBarLogout")
        history.push("/deptadmin")
    };

    // const { isAuthenticated } = useContext(AuthContext);
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) return null;
    // const [isAuthenticated, setIsAuthenticated] = useState(
    //     !!sessionStorage.getItem("token")
    //   );

    const handleLogout = () => {
        const token = sessionStorage.getItem('token'); // get before removing
        sessionStorage.removeItem('token');            // then remove
        setIsAuthenticated(false);                     // update context state
        if (token !== null) {
            history.push('/deptadmin/loginwithjwt');     // redirect only if user was logged in
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }} >
            {/* #3f51b5 */}
            <AppBar position="fixed" style={{ backgroundColor: theme.navbar.backgroundColor, marginTop: '90px', }} >
                <Toolbar variant={isSmallScreen ? 'regular' : 'dense'}>


                    {isMatch ? (
                        <>


                            <IconButton style={{ outline: 'none' }} edge="start" color="inherit" aria-label="menu" sx={{ mr: 0 }} >
                                <HomeRoundedIcon onClick={handleHome} />
                            </IconButton>

                            <DrawerComp />



                        </>
                    ) : (
                        <>
                            <IconButton style={{ outline: 'none' }} edge="start" color="inherit" aria-label="menu" sx={{ mr: 0 }} >
                                <HomeRoundedIcon onClick={handleHome} />
                            </IconButton>

                            &nbsp;
                            <a target="_blank" href='https://advservice.epramaan.gov.in/dashboard/'>
                                <Button style={{ outline: 'none' }} color="inherit" onClick={handleMenu1Click} >
                                    &nbsp;<ListTwoToneIcon /> About us
                                </Button>
                            </a>

                            {/* <Menu
                                anchorEl={anchorEl1}
                                keepMounted
                                open={Boolean(anchorEl1)}
                                onClose={() => handleMenuClose(setAnchorEl1)}
                                // style={{ marginTop: '50px' }}
                                style={{ marginTop: isSmallScreen ? '0px' : '50px' }}
                            >
                                {isShown && (
                                    <div>
                                        <a   target="_blank" href='https://advservice.epramaan.gov.in/dashboard/whatisadv'>

                                            <MenuItem  >Aadhaar Data Vault(ADV)</MenuItem>
                                        </a>
                                    </div>
                                )}
                            </Menu> */}

                            &nbsp;
                            <a target="_blank" href='https://advservice.epramaan.gov.in/dashboard/'>

                                <Button style={{ outline: 'none' }} color="inherit" onClick={handleMenu2Click}>
                                    &nbsp; <SummarizeTwoToneIcon />Services
                                </Button>

                            </a>
                            {/* <Menu
                                anchorEl={anchorEl2}
                                keepMounted
                                open={Boolean(anchorEl2)}
                                onClose={() => handleMenuClose(setAnchorEl2)}
                                style={{ marginTop: '50px' }}
                            >

                                <a  target="_blank" href='https://advservice.epramaan.gov.in/dashboard/aadhaarValutAsService'>
                                    <MenuItem>Aadhaar Data Vault as Service</MenuItem>
                                </a>
                                <a  target="_blank" href='https://advservice.epramaan.gov.in/dashboard/aadhaardatavaultasasolution'>
                                    <MenuItem >Aadhaar Data Vault as Solution</MenuItem>
                                </a>
                              

                            </Menu> */}


                            <a target="_blank" href='https://advservice.epramaan.gov.in/dashboard/'>

                                <Button style={{ outline: 'none' }} color="inherit" onClick={handleMenu3Click} >
                                    &nbsp; <SupportAgentRoundedIcon />  Contact us
                                </Button>
                            </a>
                            {/* <Menu
                                anchorEl={anchorEl3}
                                keepMounted
                                open={Boolean(anchorEl3)}
                                onClose={() => handleMenuClose(setAnchorEl3)}
                                style={{ marginTop: '50px' }}
                            >
                                <a  target="_blank" href='https://advservice.epramaan.gov.in/dashboard/contactus'>
                                    <MenuItem >Contacts</MenuItem>
                                </a>

                                <a   target="_blank" href='https://advservice.epramaan.gov.in/dashboard/resources'>
                                    <MenuItem >Resources</MenuItem>
                                </a>
                               

                            </Menu> */}

                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ flexGrow: 1 }} />

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title='logout'>
                                    <IconButton sx={{ p: 0 }} size='large' >
                                        <a href="#"> <LogoutIcon style={{ color: 'white', width: isSmallScreen ? '60px' : '100px', height: '45px', paddingTop: '0px', paddingBottom: '0px', right: '0px' }} onClick={handleLogout} /> </a>
                                       
                                    </IconButton>
                                </Tooltip>


                            </Box>
                            {/* {!authStore.loginStatus &&
                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title='login'>
                                        <IconButton sx={{ p: 0 }} size='large' >
                                            <a href="#"> <AccountCircleTwoToneIcon style={{ color: 'white', width: isSmallScreen ? '60px' : '100px', height: '45px', paddingTop: '0px', paddingBottom: '0px', right: '0px' }} /></a>

                                        </IconButton>
                                    </Tooltip>


                                </Box>
                            } */}
                            {/* {authStore.loginStatus &&
                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title={username}>
                                        <IconButton style={{ outline: 'none' }} sx={{ p: 0 }} size='large' onClick={  processLogin } >

                                            <AccountCircleTwoToneIcon style={{ color: 'white', width: isSmallScreen ? '60px' : '100px', height: '45px', paddingTop: '0px', paddingBottom: '0px', right: '0px' }} />
                                        </IconButton>
                                    </Tooltip>
                                    <Button
                                        style={{ color: 'white' }}
                                        id="fade-button"
                                        onClick={processLoginAction}

                                    >
                                        Logout
                                    </Button>

                                </Box>
                            } */}


                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}