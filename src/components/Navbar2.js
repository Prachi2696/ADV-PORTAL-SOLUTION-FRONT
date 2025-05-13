import React from "react";
import { Grid, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "i18next";
import { Select, MenuItem } from '@material-ui/core';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import AccessibleIcon from '@mui/icons-material/Accessible';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import indiaflag from '../assets/img/indiaflag.png'
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
// import AccessibleIcon from '@mui/icons-material/Accessible';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export default function Navbar2({ theme, handleThemeChange }) {
    const [fontsize, setfontsize] = useState('50px')
    const [fontSize, setFontSize] = useState('16px');
    const [fntsize, setFntsize] = useState('16px')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const isMobile = window.innerWidth <= 768;


    const handleChange = (event) => {
        setFontSize(event.target.value);
        document.documentElement.style.fontSize = event.target.value;
    };

    const handleButtonClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    localStorage.setItem('fontsize', fontsize)
    useEffect(() => {
        let currentlang = localStorage.getItem("lang")
        i18n.changeLanguage(currentlang)

        // console.log(theme + "======================navbar2theme")
    }, [])

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorE2, setAnchorE2] = React.useState(null);
    const open = Boolean(anchorEl)
    const openfont = Boolean(anchorE2)

    const [l, setL] = useState();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClick2 = (event) => {
        setAnchorE2(event.currentTarget);
    };

    const handleClose = (l) => {
        setAnchorEl(null);

    };
    const handleClosefont = (l) => {
        setAnchorE2(null);

    };
    const handleCloseEn = (l) => {
        // setAnchorEl(null);
        // setL('en')
        // console.log(l)
        // console.log(e.target.value)
        return () => {
            console.log(l)
            i18n.changeLanguage(l)
            localStorage.setItem("lang", l)
        }


    };
    const handleCloseHi = (l) => {
        // setAnchorEl(null);
        // setL('hi')
        // console.log(l)
        // // return()=>{
        // //     alert(l)
        // //   }
        return () => {
            console.log(l)
            i18n.changeLanguage(l)
            localStorage.setItem("lang", l)
        }
    };

    const handleFontSizesmaller = (s) => {
        // setfontsize('10px')
        return () => {

            console.log(s)
            setfontsize(s)
            // window.location.reload(false)
            //    alert(fontsize)
        }
        // window.location()

    }
    const handleFontSizedefault = (s) => {
        return () => {
            console.log(s)
            setfontsize(s)
            // window.location.reload(false)
            //  alert(fontsize)
        }

    }
    const handleFontSizelarger = () => {

    }
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = (event) => {
        setAnchorElUser(null);
        setFontSize(event.target.value);
        document.documentElement.style.fontSize = fntsize;
    };

    // const { t } = useTranslation();




    // const [theme, setTheme] = useState('dark');


    // const handleThemeChange = () => {
    //     setTheme(theme === 'light' ? 'dark' : 'light');
    //     localStorage.setItem("theme", theme)
    //     alert(theme)
    // };


    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(2),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // }));


    return (
        <>


            {/* <Grid container spacing={0} style={{ backgroundImage: 'linear-gradient(to right, orange , pink)', height: '30px', top: '0px', width: '100%' }}>
                <Grid item lg={4} xs={6}>


                </Grid>
                <Grid item lg={3} xs={6}>


                </Grid>
                <Grid item lg={2} xs={3} align="right">
                   
                    <div id="google_element" align="center"></div>
                </Grid>




                <Grid item lg={2} xs={3}  >

                    <div align='center'>
                        <Select value={fontSize} onChange={handleChange}>
                            <MenuItem value="10px" ><TextDecreaseIcon style={{ width: '20px', top: '0px', color: 'black' }} /></MenuItem>
                            <MenuItem value="16px"><FontDownloadIcon style={{ width: '20px', top: '0px', color: 'black' }} /></MenuItem>
                            <MenuItem value="28px" ><TextIncreaseIcon style={{ width: '20px', top: '0px', color: 'black' }} /></MenuItem>
                        </Select>
                    </div>

                </Grid>

                <Grid item lg={1} xs={3} >
                    <Button onClick={handleThemeChange}>
                       
                        {theme === 'dark' ?  <DarkModeIcon style={{ color: 'white' }} /> :  <DarkModeIcon style={{ color: 'black' }} />}
                    </Button>

                </Grid>
            </Grid> */}

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 0, md: 0, lg: 0, sm: 0 }} columns={{ lg: 25, xs: 18, sm: 18, md: 18 }} style={{ backgroundImage: 'linear-gradient(to right, orange , pink)', height: '26px', top: '0px', width: '100%', position: 'fixed', zIndex: '2' }}>

                    <Grid item lg={1} xs={1} sm={1} md={1} align='right' >
                        <img src={indiaflag} style={{ marginTop: '3px' }}></img>
                    </Grid>
                    <Grid item lg={19} xs={4} sm={4} md={4} >
                        {/* <Item>xs=2</Item> */}

                        <Typography variant="subtitle2" align="left" color='white' style={{ marginTop: '4px', fontSize: isMobile ? '7px' : 'auto' }}>&nbsp;&nbsp;GOVERNMENT OF INDIA</Typography>

                    </Grid>
                    <Grid item lg={3} xs={6} sm={6} md={8}>
                        <div id="google_element" align="center" style={{paddingBottom:'auto',paddingTop:'auto'}}
                        //  style={{ paddingTop: '2px', paddingBottom: '1px' }}
                        
                        >

                        </div>
                    </Grid>


                    <Grid item lg={1} xs={3} sm={3} md={3} align='center' >
                        {/* <div align='center' >
                            <Select value={fontSize} onChange={handleChange} style={{ height: '15px', paddingTop: '0px', paddingBottom: '0px' }} align='center'>
                                <MenuItem value="10px" ><TextDecreaseIcon style={{ width: '20px', top: '0px', color: 'black' }} /></MenuItem>
                                <MenuItem value="16px"><FontDownloadIcon style={{ width: '20px', top: '0px', color: 'black' }} /></MenuItem>
                                <MenuItem value="22px" ><TextIncreaseIcon style={{ width: '20px', top: '0px', color: 'black' }} /></MenuItem>
                            </Select>
                        </div> */}
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Accessiblility">
                                <IconButton onClick={handleOpenUserMenu} style={{outline:'none'}}  sx={{ p: 0 }}>
                                    <AccessibleIcon style={{width:'18px' ,paddingTop:'auto' ,paddingBottom:'auto' }} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                                style={{ marginTop: '10px', marginLeft: '15px' }}
                            >
                                {/* {settings.map((setting) => ( */}
                                <MenuItem onClick={(e) => (document.documentElement.style.fontSize = '12px', setAnchorElUser(null))}>
                                    {/* <Typography textAlign="center">{setting}</Typography> */}
                                    <TextDecreaseIcon style={{ width: '20px', top: '0px', color: 'black' }} />
                                </MenuItem>
                                <MenuItem onClick={(e) => (document.documentElement.style.fontSize = '16px', setAnchorElUser(null))}><FontDownloadIcon style={{ width: '20px', top: '0px', color: 'black' }} /></MenuItem>
                                <MenuItem onClick={(e) => (document.documentElement.style.fontSize = '19px', setAnchorElUser(null))} ><TextIncreaseIcon style={{ width: '20px', top: '0px', color: 'black' }} /></MenuItem>
                                {/* ))} */}
                            </Menu>
                        </Box>
                    </Grid>
                    {/* <Grid item lg={1} xs={3} sm={3} md={3}>
                        <div align='center' style={{}}>
                            <Button onClick={handleThemeChange} style={{outline:'none'}}>

                                {theme === 'dark' ? <DarkModeIcon style={{ color: 'white', width: '30px', paddingBottom: '10px' }} /> : <DarkModeIcon style={{ color: 'black', width: '30px', paddingBottom: '10px' }} />}


                            </Button>
                        </div>
                    </Grid> */}

                </Grid>
            </Box>


        </>
    );
}