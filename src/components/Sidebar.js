import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import AdminNavbarLogout from './AdminNavbarLogout';

import { AiOutlineHome } from 'react-icons/ai';

import { AiOutlineForm } from 'react-icons/ai';
import { MdAppRegistration, MdGroups } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { VscKey } from 'react-icons/vsc';
import 'react-pro-sidebar/dist/css/styles.css';
import { useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useHistory } from 'react-router-dom';

export default function Sidebar() {
    const theme = useTheme();
    const [showSidebar, setShowSidebar] = useState('-left-64');
    let { authStore } = useSelector((state) => state);
    const roleStatus = authStore.roletype;

    var history = useHistory();
    useEffect(()=>{
        const token = sessionStorage.getItem("token");
        if (token==null) {
            // const payload = JSON.parse(atob(token.split('.')[1]));
            // const exp = payload.exp;
            // if (Date.now() >= exp * 1000) {
                sessionStorage.removeItem("token");
                history.push('/deptadmin/loginwithjwt');
            // }
        }
    },[])

    

    return (

        <>

            {/* <div style={{overflow:'scroll'}}> */}
            <Box sx={{ overflow: 'auto' }}>
                {/* {!authStore.loginStatus &&
                    <></>

                } */}

                {/* {authStore.loginStatus && */}

                    <AdminNavbarLogout
                        showSidebar={showSidebar}
                        setShowSidebar={setShowSidebar}
                    />

               

                <div
                    className={`h-screen fixed top-0 md:left-0 sm:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
                    style={{ maxHeight: 'auto', height: '60%', marginTop: '130px', backgroundColor: theme.sidebar.backgroundColor, position: 'fixed', zIndex: '2' }}
                >
                    <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">


                        <div className="flex flex-col" >

                            <ul className="flex-col min-w-full flex list-none">



                                <li className="rounded-lg mb-1 mt-0">
                                    <NavLink

                                        to={`/deptadmin`}
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        <AiOutlineHome style={{ color: theme.typography.primary.paragraphbody }} />
                                        <Typography variant='h7' style={{ color: theme.typography.primary.paragraphbody }}> Dashboard</Typography>

                                    </NavLink>
                                </li>


                                <li className="rounded-lg mb-1 ">
                                    <NavLink
                                        to="/deptadmin/adminappdetails"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        <MdGroups style={{ color: theme.typography.primary.paragraphbody }} />
                                        <Typography variant='h7' style={{ color: theme.typography.primary.paragraphbody }}>  Application Details</Typography>

                                    </NavLink>
                                </li>

                                <li className="rounded-lg mb-1 ">
                                    <NavLink
                                        to="/deptadmin/registration"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        <MdAppRegistration style={{ color: theme.typography.primary.paragraphbody }} />
                                        <Typography variant='h7' style={{ color: theme.typography.primary.paragraphbody }}>Department Registration </Typography>

                                    </NavLink>
                                </li>

                                <li className="rounded-lg mb-1 ">
                                    <NavLink
                                        to="/deptadmin/appregistration"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        <AiOutlineForm style={{ color: theme.typography.primary.paragraphbody }} />
                                        <Typography variant='h7' style={{ color: theme.typography.primary.paragraphbody }}>Application Registration </Typography>

                                    </NavLink>
                                </li>

                                <li className="rounded-lg mb-1 ">
                                    <NavLink
                                        to="/deptadmin/keyregistration"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        <VscKey style={{ color: theme.typography.primary.paragraphbody }} />
                                        <Typography variant='h7' style={{ color: theme.typography.primary.paragraphbody }}>Key Registration </Typography>

                                    </NavLink>
                                </li>

                                <li className="rounded-lg mb-1 ">
                                    <NavLink
                                        to="/deptadmin/keymapping"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        <VscKey style={{ color: theme.typography.primary.paragraphbody }} />
                                        <Typography variant='h7' style={{ color: theme.typography.primary.paragraphbody }}>Key Mapping </Typography>

                                    </NavLink>
                                </li>


                                {roleStatus == "1" &&

                                    <li className="rounded-lg mb-1 ">
                                        <NavLink
                                            to="/deptadmin/registration"
                                            exact
                                            className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                            activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                        >
                                            <MdAppRegistration style={{ color: theme.typography.primary.paragraphbody }} />
                                            <Typography variant='h7' style={{ color: theme.typography.primary.paragraphbody }}> Department Registration</Typography>


                                        </NavLink>
                                    </li>
                                }

                                {/* <li className="rounded-lg mb-1 ">
                                    <NavLink
                                        to="/deptadmin/noofservices"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        <BarChartIcon style={{ color: theme.typography.primary.paragraphbody }} />
                                        <Typography variant='h7' style={{ color: theme.typography.primary.paragraphbody }}>Department Updates</Typography>

                                    </NavLink>
                                </li> */}
                                {roleStatus == "1" &&
                                    <li className="rounded-lg mb-1">
                                        <NavLink
                                            to="/deptadmin/appregistration"
                                            exact
                                            className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                            activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                        >
                                            <AiOutlineForm style={{ color: theme.typography.primary.paragraphbody }} />
                                            <Typography variant='h7' style={{ color: theme.typography.primary.paragraphbody }}>  Application Registration</Typography>


                                        </NavLink>
                                    </li>
                                }


                                {roleStatus == "1" &&
                                    <li className="rounded-lg mb-1 ">
                                        <NavLink
                                            to="/deptadmin/keyregistration"
                                            exact
                                            className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                            activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                        >
                                            <VscKey />
                                            Key Registration
                                        </NavLink>
                                    </li>
                                }


                                {roleStatus == "1" &&
                                    <li className="rounded-lg mb-1 ">
                                        <NavLink
                                            to="/deptadmin/keymapping"
                                            exact
                                            className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                            activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                        >
                                            <VscKey />
                                            Key Mapping
                                        </NavLink>
                                    </li>
                                }



                                <li className="rounded-lg mb-1 ">
                                    <NavLink
                                        to="/deptadmin/reportsapp"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        <TbReport style={{ color: theme.typography.primary.paragraphbody }} />
                                        <Typography variant='h7' style={{ color: theme.typography.primary.paragraphbody }}>Report</Typography>


                                    </NavLink>
                                </li>
                                {/* <li className="rounded-lg mb-1 ">
                                    <NavLink
                                        to="/deptadmin/billing"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        <TbReport style={{ color: theme.typography.primary.paragraphbody }} />
                                        <Typography variant='h7' style={{ color: theme.typography.primary.paragraphbody }}>Bill</Typography>


                                    </NavLink>
                                </li> */}

                                {/* <li className="rounded-lg mb-1 ">
                                    <NavLink
                                        to="/deptadmin/invoiceregistration"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        <MdAppRegistration style={{ color: theme.typography.primary.paragraphbody }} />
                                        <Typography variant='h7' style={{ color: theme.typography.primary.paragraphbody }}>Invoice Registration</Typography>


                                    </NavLink>
                                </li> */}
                                {/* <li className="rounded-lg mb-1 ">
                                    <NavLink
                                        to="/deptadmin/chartforinvoice"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        <BarChartIcon style={{ color: theme.typography.primary.paragraphbody }} />
                                        <Typography variant='h7' style={{ color: theme.typography.primary.paragraphbody }}>Invoice Chart</Typography>


                                    </NavLink>
                                </li> */}

                                {/* <li className="rounded-lg mb-1 ">
                                    <NavLink
                                        to="/deptadmin/deptwiseinvoice"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        <BarChartIcon style={{ color: theme.typography.primary.paragraphbody }} />
                                        <Typography variant='h7' style={{ color: theme.typography.primary.paragraphbody }}>Invoice Reports</Typography>

                                    </NavLink>
                                </li> */}


                                <br></br>
                                <br></br>
                                <br></br>


                               
                            </ul>
                        </div>
                    </div>
                </div>

            </Box>
        </>
    );
}