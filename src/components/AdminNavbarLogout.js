import React from 'react';
import Button from '@material-tailwind/react/Button';
import { useHistory, useLocation } from 'react-router-dom';
import { AiOutlineCloseCircle, AiOutlineMenu } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { logoutApiAction } from "../store/authslice";
export default function AdminNavbarLogout({ showSidebar, setShowSidebar }) {
    const isMobile = window.innerWidth <= 768;
    let { authStore } = useSelector((state) => state);
    var CryptoJS = require("crypto-js");
    // const user =JSON.parse( CryptoJS.AES.decrypt(authStore.deptId, 'abc').toString(CryptoJS.enc.Utf8))
    try {
        var bytes = CryptoJS.AES.decrypt(authStore.deptId, 'adv');
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (error) {

    }
    const location = useLocation().pathname;
    let dispatch = useDispatch();
    let history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open1 = Boolean(anchorEl);
    const handleClick1 = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose1 = () => {
        setAnchorEl(null);
    };

    const navtoadvasservice = () => {
        window.location.href = "https://advservice.epramaan.gov.in/dashboard/aadhaarValutAsService";
    };
    const navtoadvassolution = () => {
        window.location.href = "https://advservice.epramaan.gov.in/dashboard/aadhaardatavaultasasolution";

    }

    const [anchorE2, setAnchorE2] = React.useState(null);
    const open2 = Boolean(anchorE2);
    const handleClick2 = (event) => {
        setAnchorE2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorE2(null);
    };
    const navtoadvcontact = () => {
        window.location.href = "https://advservice.epramaan.gov.in/dashboard/contactus";
    }
    const navtoadvresources = () => {
        window.location.href = "https://advservice.epramaan.gov.in/dashboard/resources";

    }

    const [anchorE3, setAnchorE3] = React.useState(null);
    const open3 = Boolean(anchorE3);
    const handleClick3 = (event) => {
        setAnchorE3(event.currentTarget);
    };
    const handleClose3 = () => {
        setAnchorE3(null);
    };

    const navtoADV = () => {
        window.location.href = "https://advservice.epramaan.gov.in/dashboard/whatisadv";

    }

    

    return (
        <>
            <div className="md:hidden">
                <Button
                    color="transparent"
                    buttonType="link"
                    size="lg"
                    iconOnly
                    rounded
                    ripple="light"
                    onClick={() => setShowSidebar('left-0')}
                    style={{ marginTop: '170px' }} 
                >
                    <AiOutlineMenu color='red' size={25} />
                </Button>
                <div
                    className={`absolute top-2 md:hidden ${showSidebar === 'left-0' ? 'left-64' : '-left-64'
                        } z-50 transition-all duration-300`}
                >
                    <Button
                        color="transparent"
                        // buttonType="link"
                        size="sm"
                        iconOnly
                        rounded
                        // ripple="light"
                        onClick={() => setShowSidebar('-left-64')}
                    >
                        {/* <CancelIcon  size={35} style={{color:'black' }} /> */}

                        <AiOutlineCloseCircle color='#03a9f4' size={35} style={{marginTop:isMobile?'40px':'auto'}}/>
                    </Button>
                </div>
            </div>

{/* --------------------------------------------Navbar with right align items without responsive button----------------------------------------------------------------- */}

            {/* <nav className="bg-light-Green-500  py-1 px-3" style={{ backgroundColor: '#f0f0f0', marginTop: '0px', marginBottom: '10px' }}>
                <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                    <div className="flex justify-between items-center w-full">
                        <h4 className="uppercase text-white text-sm tracking-wider mt-1">
                        </h4>
                        <div className="flex">
                            <div style={{ marginRight: '25px' }}>
                                <Button1
                                    style={{ color: 'grey' }}
                                    id="fade-button"
                                    aria-controls={open3 ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open3 ? 'true' : undefined}
                                    onClick={handleClick3}
                                >
                                    About Us
                                </Button1>
                                <Menu
                                    id="fade-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={anchorE3}
                                    open={open3}
                                    onClose={handleClose3}
                                    TransitionComponent={Fade}
                                >
                                    <MenuItem style={{ backgroundColor: '#eaeaea' }} onClick={(e) => { handleClose3(); navtoADV() }}  >Aadhaar Data Vault(ADV)</MenuItem>
                                </Menu>
                            </div>

                            <div style={{ marginRight: '25px' }}>
                                <Button1
                                    style={{ color: 'grey' }}
                                    id="fade-button"
                                    aria-controls={open1 ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open1 ? 'true' : undefined}
                                    onClick={handleClick1}
                                >
                                    Services
                                </Button1>
                                <Menu
                                    id="fade-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open1}
                                    onClose={handleClose1}
                                    TransitionComponent={Fade}
                                >
                                    <MenuItem style={{ backgroundColor: '#eaeaea' }} onClick={(e) => { handleClose1(); navtoadvasservice() }}  >Aadhaar Data Vault as a Service</MenuItem>
                                    <hr />
                                    <MenuItem style={{ backgroundColor: '#eaeaea' }} onClick={(e) => { handleClose1(); navtoadvassolution() }}>Aadhaar Data Vault as a Solution</MenuItem>
                                </Menu>
                            </div>

                            <div style={{ marginRight: '25px', display: 'flex' }} >
                                <MdPhone style={{ marginTop: '7px' }} />
                                <Button1
                                    style={{ color: 'grey' }}
                                    id="fade-button"
                                    aria-controls={open2 ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open2 ? 'true' : undefined}
                                    onClick={handleClick2}
                                >
                                    Contact Us
                                </Button1>
                                <Menu
                                    id="fade-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={anchorE2}
                                    open={open2}
                                    onClose={handleClose2}
                                    TransitionComponent={Fade}
                                >
                                    <MenuItem style={{ backgroundColor: '#eaeaea' }} onClick={(e) => { handleClose2(); navtoadvcontact() }}   >Contact</MenuItem>
                                    <hr />
                                    <MenuItem style={{ backgroundColor: '#eaeaea' }} onClick={(e) => { handleClose2(); navtoadvresources() }}  >Resources</MenuItem>
                                </Menu>
                            </div>


                            {authStore.deptId &&
                                <div style={{ marginRight: '25px', color: '#26a69a', }}>
                                    <Button1
                                        style={{ color: 'grey' }}
                                        id="fade-button"
                                        aria-controls={open3 ? 'fade-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open3 ? 'true' : undefined}
                                    >
                                        {decryptedData}
                                    </Button1>

                                </div>
                            }
                            <div style={{ marginRight: '25px' }}>
                                <Button1
                                    style={{ color: 'grey' }}
                                    id="fade-button"
                                    aria-controls={open3 ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open3 ? 'true' : undefined}
                                    onClick={processLoginAction}
                                >
                                    Logout
                                </Button1>
                            </div>
                        </div>
                    </div>
                </div>
            </nav> */}
        </>
    );
}
