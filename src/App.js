import { Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import React from 'react';

import Report from './pages/Report';

// Tailwind CSS Style Sheet
import './assets/styles/tailwind.css';
import ApplicationDetails from './components/ApplicationDetails';
import ApplicationsInfo from './components/ApplicationsInfo';
import AppDetails from './components/AppDetails';
import LoginRequired from './components/LoginRequired';
import HeaderAdv from './components/HeaderAdv';
import Billing from './components/Billing';
import ReportApp from './pages/ReportApp';
import BillingApp from './components/BillingApp';
import Navbar2 from './components/Navbar2';

import { useEffect, useState } from 'react';
import '../src/App.css';
import { createTheme , ThemeProvider } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import NavbarShrink from './components/NavbarShrink';
import Footer2 from './pages/Footer2';
import Dashboard from './pages/Dashboard';
import SingIn from './pages/SingIn';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import { AppWiseoprTransactionBarchart } from './components/AppWiseOprTransactionBarchart';
import AdminAppDetails from './components/AdminAppDetails'
import AdminAllowedOperations from './components/AdminAllowedOperations';
import Registration from './components/Registration';
import AppRegistration from './components/AppRegistration';
import KeyRegistration from './components/KeyRegistration';
import KeyMapping from './components/KeyMapping';
import KeyInfoUpdate from './components/KeyInfoUpdate'
import ChartforInvoice from './components/ChartforInvoice';

import invoiceReg from './components/InvoiceReg';
import InvoiceDetail from './components/InvoiceDetail';
import A from './components/A';
import ToggleButtons from './components/ToggleButtons';
import Invoicetable from './components/Invoicetable';
import EditableTable from './components/EditableTable';
import DeptwiseInvoice from './components/DeptwiseInvoice';
import CheckNoofServices from './components/CheckNoofServices';
import LoginwithJWT from './components/LoginwithJWT';
import PrivateRoute from './components/PrivateRoute';
import ProtectedPage from './components/ProtectedPage';
import loadUserData from './components/loadUserData';
import { Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage.js'
import ForgotPassword from './components/ForgotPassword.js'


// import PhotosnVideos from './components/PhotosnVideos';

// import Card from '@mui/material';

// import EmblaCarousel from "./EmblaCarousel";

// import 'bootstrap/dist/css/bootstrap.min.css';


const lightTheme = createTheme ({
  palette: {
    type: 'light',
  },
  grid: {
    backgroundColor: 'white'
  },
  dash: {
    backgroundColor: 'linear-gradient(to right, lightgrey , lightblue)'
  },

  dashboardcount: {
    backgroundColor: 'linear-gradient(to right, #f7f6fa , #DEF1F7)'
  },
  // dashboardiv:{
  //   bgcolor:'linear-gradient(to right, lightgrey , lightblue)',
  // },
  titleADV: {
    background: 'linear-gradient(to right, #330867 , #30CFD0 )'
  },
  news: {
    backgroundImage: 'linear-gradient(to right,  orange,pink)'
  },
  table: {
    backgroundImage: 'linear-gradient(to right,  orange,pink)'
  },
  tablebody: {
    backgroundColor: 'whitesmoke'
  },
  tableinnerbody: {
    backgroundImage: 'linear-gradient(to right, lightgrey , lightblue)'
  },
  tablecontainer: {
    backgroundColor: 'white'
  },
  navbar: {
    backgroundColor: '#063970'
  },
  sidebar: {
    backgroundColor: 'white'
  },
  login: {
    backgroundColor: 'blue'
  },
  accordianbg: {
    backgroundColor: 'white'
  },
  dropdownbg: {
    backgroundColor: 'white'
  },
  viewbg: {
    backgroundColor: '#80aed736'
  },
  viewbgtable: {
    backgroundColor: 'aliceblue'
  },
  typography: {
    // color: 'white',
    // fontSize: '10px',
    primary: {
      light: 'green',
      dark: 'red',
      lightest: 'orange',
      title: 'blue',
      galleryheading: '#548BC5',
      headings: '#2b5281',
      paragraph: 'black',
      mainheading: '#2b5281',
      paragraphbody: 'black',
      success: 'green',
      app: 'black',


    },
    secondary: {
      light: 'black'
    }
  },

  // background: 'linear-gradient(to right, #330867 , #30CFD0 )'
});

const darkTheme = createTheme ({
  palette: {
    type: 'dark',

  },
  news: {
    backgroundImage: 'linear-gradient(to right, black,black)'
  },

  dashboardcount: {
    backgroundColor: 'linear-gradient(to right, black, black)'
  },
  titleADV: {
    background: 'linear-gradient(to right, white, white )'
  },
  dropdownbg: {
    backgroundColor: '#616161'
  },
  viewbgtable: {
    backgroundColor: 'black'
  },
  typography: {
    color: 'yellow',
    // fontSize: '10px',
    primary: {
      light: 'yellow',
      dark: 'yellow',
      lightest: 'yellow',
      title: 'yellow',
      galleryheading: 'yellow',
      mainheading: 'yellow',
      paragraphbody: 'white',
      success: 'yellow',
      app: 'yellow'
    },
    secondary: {
      light: 'white'
    }
  },
  dash: {
    backgroundColor: 'linear-gradient(to right, black , black)',
  },
  viewbg: {
    backgroundColor: '#616161'
  },
  title: {
    textcolor: 'white'
  },
  navbar: {
    backgroundColor: '#424242'
  },
  sidebar: {
    backgroundColor: '#424242'
  },
  login: {
    backgroundColor: '#9e9e9e'
  },

  grid: {
    backgroundColor: 'black'
  },
  bgbody: {

    bgblack: 'black'
  },
  table: {
    backgroundImage: 'linear-gradient(to right,#616161,#bdbdbd)'
  },
  card: {
    primary: 'black'
  },
  tablebody: {
    backgroundColor: '#424242'
  },
  tableinnerbody: {
    backgroundImage: 'linear-gradient(to right, #616161 ,#616161)'
  },
  tablecontainer: {
    backgroundColor: 'black'
  },
  accordianbg: {
    backgroundColor: '#e0e0e0'
  }
  // font:{
  //   type:'dark'
  // }

});

export const AuthContext = React.createContext();
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!sessionStorage.getItem("token"));
  const realtheme = useTheme();
  // let { authStore } = useSelector((state) => state);




  const [portaltype, setportaltype] = useState();

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(!!sessionStorage.getItem("token"));
    };
    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);

  }, [])

  const [selecttheme, setSelectheme] = useState();
  // const selectedtheme = "'" + selecttheme + "'";
  const [theme, setTheme] = useState('light');
  const [bodybgcolor, setbodybgcolor] = useState('white');

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem("theme", theme)
    setSelectheme(localStorage.getItem("theme"))
    // alert(selectedtheme)
    if (theme === 'light') {
      setbodybgcolor('black')
    }
    else if (theme === 'dark') {
      setbodybgcolor('white')
    }

    // alert(theme)
  };

  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>

      <Navbar2 theme={theme} handleThemeChange={handleThemeChange} />


      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

        <div style={{ backgroundColor: bodybgcolor }}>

          <HeaderAdv />



          <NavbarShrink />
          {/* {authStore.type == 'd' && <Sidebar />} */}
          
          {isAuthenticated && <Sidebar />}
          <div className="md:ml-64" style={{ marginTop: '12%' }}>
            <Switch>
              {/* <Route exact path="/deptadmin/loginwithjwt" component={LoginwithJWT} /> */}
              <Route exact path="/deptadmin/loginwithjwt" component={LoginPage} />
              {/* <PrivateRoute exact path="/deptadmin/test" component={loadUserData} /> */}
              <PrivateRoute exact path="/deptadmin/registration" component={Registration} />
              <PrivateRoute exact path="/deptadmin" component={Dashboard} />
              <PrivateRoute exact path="/deptadmin/adminappdetails" component={AdminAppDetails} />
              <PrivateRoute exact path="/deptadmin/appregistration" component={AppRegistration} />
              <PrivateRoute exact path="/deptadmin/keyregistration" component={KeyRegistration} />
              <PrivateRoute exact path="/deptadmin/keymapping" component={KeyMapping} />
              {/* <PrivateRoute exact path="/deptadmin/reports" component={Report} /> */}
              <PrivateRoute exact path="/deptadmin/reportsapp" component={ReportApp} />
              <PrivateRoute exact path="/deptadmin/appcharts/:appcode" component={AppWiseoprTransactionBarchart} />
              <PrivateRoute exact path="/deptadmin/applicationDetails" component={ApplicationDetails} />
              <PrivateRoute exact path="/deptadmin/applicationinfo/:appcode/:appName" component={props => <ApplicationsInfo {...props} />} />
              <PrivateRoute exact path="/deptadmin/appcharts/:appcode" component={AppWiseoprTransactionBarchart} />
              {/* <Route exact path="/deptadmin/log" component={LoginPage} /> */}
              <Route exact path="/deptadmin/forgot-password" component={ForgotPassword} />
              {/* other routes */}
            </Switch>
          </div>


          



          <Footer2 />


        </div>
      </ThemeProvider>
      </AuthContext.Provider>
    </>
  );
}



export default App;
