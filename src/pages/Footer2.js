import { AppBar, Button, Grid, Toolbar, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import cdaclogo from '../assets/img/Cdac_logo.png'
import { useHistory } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import { Table, TableCell, TableContainer, TableRow } from '@mui/material';
import { Col, Row } from 'reactstrap';
import { Tab } from 'bootstrap';
const Footer2 = () => {

    const isMobile = window.innerWidth <= 768;

    const theme = useTheme();
    const history = useHistory();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));
    const handlesitemap = (e) => {
        history.push('/adv/sitemap')
    }
    const handleHyperlink = (e) => {
        history.push('/adv/hyperlinkpolicy')
    }
    const handleHelp = (e) => {
        history.push('/adv/help')
    }
    const handleDisclaimer = (e) => {
        history.push('/adv/disclaimer')
    }
    const handleCopyright = (e) => {
        history.push('/adv/coprightpolicy')
    }
    const handlePrivacy = (e) => {
        history.push('/adv/privacypolicy')
    }
    const handleTerms = (e) => {
        history.push('/adv/termsandconditions')
    }
    return (
        <>
            <AppBar position="sticky" color="primary" bottom='0px' style={{ top: 'auto', bottom: 0, backgroundColor: theme.navbar.backgroundColor, color: 'white', height: isMobile ? '130px' : 'auto', zIndex: '3' ,position:'fixed'}}>
                <Toolbar>


                    <Grid container spacing={1} columns={matches ? { lg: 8 } : { xs: 24 }}>


                        <Grid item lg={3} xs={7} align='left'>
                            <a
                                target="_blank"
                                href="https://www.cdac.in/">
                                {/* <img src={cdaclogo} style={{ width: isMobile ? '200px' : '350px' ,marginTop:'10px'}} /> */}
                                <img src={cdaclogo} style={{ width: isMobile ? '0px' : '100px' ,height:isMobile ? '0px' : '50px' ,marginTop:'10px'}} />

                            </a>
                        </Grid>


                        <Grid item lg={8} xs={16}>
                            <TableContainer >
                                <TableRow>
                                    {/* <TableCell>
                                <a
                                    target="_blank"
                                    href="https://www.cdac.in/">
                                    <img src={cdaclogo} style={{ width: isMobile ? '200px' : '400px' }} />
                                </a>
                            </TableCell> */}
                                    <TableCell style={{ borderRight: '0px solid white', borderBottom: '0px' }}>
                                        <a  target="_blank" href='https://advservice.epramaan.gov.in/dashboard/sitemap'><Button variant='text' color="inherit"style={{ fontSize: isMobile ? '7px' : '11px' ,outline:'none'}} >Sitemap </Button>|</a>
                                        <a   target="_blank" href='https://advservice.epramaan.gov.in/dashboard/hyperlinking'>
                                        <Button variant='text' color="inherit" style={{ fontSize: isMobile ? '7px' : '11px',outline:'none' }}>Hyperlink Policy</Button>|

                                        </a>
                                        <a  target="_blank" href='https://advservice.epramaan.gov.in/dashboard/help'>
                                        <Button variant='text' color="inherit" style={{ fontSize: isMobile ? '7px' : '11px' ,outline:'none'}}>Help</Button>|

                                        </a>
                                        <a  target="_blank" href='https://advservice.epramaan.gov.in/dashboard/disclaimer'>
                                        <Button variant='text' color="inherit"  style={{ fontSize: isMobile ? '7px' : '11px',outline:'none' }}>Disclaimer</Button>|

                                        </a>
                                        <a  target="_blank" href='https://advservice.epramaan.gov.in/dashboard/copyright'>
                                        <Button variant='text' color="inherit"  style={{ fontSize: isMobile ? '7px' : '11px',outline:'none' }}>Copyright Policy</Button>|

                                        </a>
                                        <a  target="_blank" href='https://advservice.epramaan.gov.in/dashboard/privacy'>
                                        <Button variant='text' color="inherit"  style={{ fontSize: isMobile ? '7px' : '11px' ,outline:'none'}}>Privacy Policy</Button>|

                                        </a>
                                        <a  target="_blank" href='https://advservice.epramaan.gov.in/dashboard/terms'>
                                        <Button variant='text' color="inherit"  style={{ fontSize: isMobile ? '7px' : '11px' ,outline:'none'}}>Terms and Conditions</Button>

                                        </a>
                                    
                                    </TableCell>
                                    {/* <TableCell style={{ borderRight: '1px solid white', borderBottom: '0px' }}>
                                        <Button variant='text' color="inherit" onClick={handleHyperlink} style={{ fontSize: isMobile ? '9px' : '11px' }}>Hyperlink Policy</Button>
                                    </TableCell>
                                    <TableCell style={{ borderRight: '1px solid white', borderBottom: '0px' }}>
                                        <Button variant='text' color="inherit" onClick={handleHelp} style={{ fontSize: isMobile ? '9px' : '11px' }}>Help</Button>
                                    </TableCell>
                                    <TableCell style={{ borderRight: '1px solid white', borderBottom: '0px' }}>
                                        <Button variant='text' color="inherit" onClick={handleDisclaimer} style={{ fontSize: isMobile ? '9px' : '11px' }}>Disclaimer</Button>

                                    </TableCell>
                                    <TableCell style={{ borderRight: '1px solid white', borderBottom: '0px' }}>
                                        <Button variant='text' color="inherit" onClick={handleCopyright} style={{ fontSize: isMobile ? '9px' : '11px' }}>Copyright Policy</Button>

                                    </TableCell>
                                    <TableCell style={{ borderRight: '1px solid white', borderBottom: '0px' }}>
                                        <Button variant='text' color="inherit" onClick={handlePrivacy} style={{ fontSize: isMobile ? '9px' : '11px' }}>Privacy Policy</Button>

                                    </TableCell>
                                    <TableCell style={{ borderRight: '0px solid white', borderBottom: '0px' }}>
                                        <Button variant='text' color="inherit" onClick={handleTerms} style={{ fontSize: isMobile ? '9px' : '11px' }}>Terms and Conditions</Button>

                                    </TableCell> */}
                                 
                                </TableRow>
                            </TableContainer>

                        </Grid>


                        {/* <Grid item lg={1} xs={2} align="center" >
                            <Button variant='text' color="inherit" onClick={handlesitemap} style={{ fontSize: isMobile ? '9px' : '11px' }} >Sitemap</Button>
                        </Grid>
                        <Grid item lg={1} xs={2} align="center">
                            <Button variant='text' color="inherit" onClick={handleHyperlink} style={{ fontSize: isMobile ? '9px' : '11px' }}>Hyperlink Policy</Button>
                        </Grid>
                        <Grid item lg={1} xs={2} align="center">
                            <Button variant='text' color="inherit" onClick={handleHelp} style={{ fontSize: isMobile ? '9px' : '11px' }}>Help</Button>
                        </Grid>
                        <Grid item lg={1} xs={2} align="center">
                            <Button variant='text' color="inherit" onClick={handleDisclaimer} style={{ fontSize: isMobile ? '9px' : '11px' }}>Disclaimer</Button>
                        </Grid>
                        <Grid item lg={1} xs={2} align="center">
                            <Button variant='text' color="inherit" onClick={handleCopyright} style={{ fontSize: isMobile ? '9px' : '11px' }}>Copyright Policy</Button>
                        </Grid>

                        <Grid item lg={1} xs={2} align="center">
                            <Button variant='text' color="inherit" onClick={handlePrivacy} style={{ fontSize: isMobile ? '9px' : '11px' }}>Privacy Policy</Button>
                        </Grid>
                        <Grid item lg={2} xs={2} align="center">
                            <Button variant='text' color="inherit" onClick={handleTerms} style={{ fontSize: isMobile ? '9px' : '11px' }}>Terms and Conditions</Button>
                        </Grid> */}






                        <Grid item lg={1} xs={4} align="center" >
                            <a
                                href="https://www.facebook.com/ePramaan"
                                target="_blank"
                                rel="noreferrer"
                                className="text-light-blue-500 mr-1 hover:text-light-blue-700"
                            >
                                <FacebookIcon  style={{ color: 'white', marginTop: '10px',width:isMobile ? '20px' : '20px',height:isMobile ? '20px' : '20px' }} />

                            </a>
                            <a
                                href="https://www.linkedin.com/in/epramaan-c-dac-102713252/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-light-blue-500 mr-1 hover:text-light-blue-700"
                            >
                                <LinkedInIcon style={{ color: 'white', marginTop: '10px',width:isMobile ? '20px' : '20px',height:isMobile ? '20px' : '20px' }} />
                            </a>
                            <a
                                href="https://twitter.com/epramaan"
                                target="_blank"
                                rel="noreferrer"
                                className="text-light-blue-500 mr-1 hover:text-light-blue-700"
                            >
                                <TwitterIcon style={{ color: 'white', marginTop: '10px',width:isMobile ? '20px' : '20px',height:isMobile ? '20px' : '20px' }} />
                            </a>
                        </Grid>
                        <hr></hr>
                        <Grid item lg={12} xs={12} align="center">
                            <div style={{ height: '1px', backgroundColor: 'white' }}></div>
                            <p className=" mb-6 lg:mb-0 flex justify-center text-sm" style={{ fontSize: isMobile ? '7px' : '10px' }}>
                                <a
                                    href="https://www.cdac.in/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-light-blue-500 "

                                >
                                </a>
                                Copyright &copy; {new Date().getFullYear()}{' '}C-DAC Mumbai. All Rights Reserved.
                            </p>
                        </Grid>



                    </Grid>


                    {/* <TableContainer >
    <TableRow >
        <TableCell style={{borderRight:'1px solid white',borderBottom:'0px'}}>123414124e12411</TableCell>
        <TableCell style={{borderRight:'1px solid white',borderBottom:'0px'}}>1</TableCell>
        <TableCell style={{borderRight:'1px solid white',borderBottom:'0px'}}>1</TableCell>
    </TableRow>
</TableContainer> */}


                </Toolbar>

            </AppBar>


        </>
    );
};

export default Footer2;
