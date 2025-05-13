import { Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

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
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
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


// import PhotosnVideos from './components/PhotosnVideos';

// import Card from '@mui/material';

// import EmblaCarousel from "./EmblaCarousel";

// import 'bootstrap/dist/css/bootstrap.min.css';


const lightTheme = createMuiTheme({
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

const darkTheme = createMuiTheme({
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


function App() {
  const realtheme = useTheme();
  let { authStore } = useSelector((state) => state);


  // const googleTranslateRef = useRef();

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "//translate.google.com/translate_a/element.js?cb=onGoogleTranslateLoad";
  //   document.body.appendChild(script);
  //   window.onGoogleTranslateLoad = () => {
  //     new window.google.translate.TranslateElement(
  //       {
  //         pageLanguage: "en",
  //         includedLanguages:
  //           "en,hi,mr",
  //         layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
  //         autoDisplay: false,
  //         gaTrack: true,
  //         gaId: "UA-xxxxxxx-x",
  //       },
  //       googleTranslateRef.current
  //     );
  //   };
  // }, []);
  // const [theme, setTheme] = useState('light');

  // const theme = useTheme();
  // alert(theme)

  const [portaltype, setportaltype] = useState();

  useEffect(() => {

    if (authStore.type == 'd') {
      setportaltype(true)
    } else {
      setportaltype(false)
    }
    // console.log(portaltype + "--------------------selected type")

    // console.log(JSON.stringify(theme) + "-------------------theme")
    // const stheme=localStorage.getItem('theme')
    // setSelecttheme( stheme)
    // console.log(selecttheme + "--------------------selected theme")


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
      {/* <div ref={googleTranslateRef} /> */}
      {/* <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> */}

      {/* {authStore.type=='d' && <Sidebar/>}
      {authStore.loginStatus &&
            <>
              <div className="md:ml-64">
                <Route exact path="/admin/applicationDetails" component={ApplicationDetails} />
                <Route exact path="/admin/applicationinfo/:appcode" component={props => <ApplicationsInfo {...props} />} />
                <Route exact path="/admin/appdetails" component={AppDetails} />
                <Route exact path="/adv" component={Dashboard} />
                <Route exact path="/admin/reports" component={Report} />
                <Route exact path="/admin/billing" component={Billing} />


              </div>
            </>


          } */}
      {/* <Route exact path="/dashboard" component={Navbar2} /> */}
      <Navbar2 theme={theme} handleThemeChange={handleThemeChange} />

      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

        <div style={{ backgroundColor: bodybgcolor }}>
          {/* <Button onClick={handleThemeChange}>
            {theme === 'dark' ? <DarkModeIcon style={{ color: 'white' }} /> : <DarkModeIcon style={{ color: 'black' }} />}
          </Button> */}
          {/* <Navbar2 /> */}
          {/* <FontSizeSelector/> */}
          {/* <Route exact path="/" component={HeaderAdv} /> */}
          <HeaderAdv />


          {/* <Navbar3 /> */}
          {/* <Route exact path="/" component={NavbarShrink} /> */}
          <NavbarShrink />

          {/* <Navbarresp /> */}

          {/* {authStore.loginStatus && <> */}

          {authStore.type == 'd' && <Sidebar />}


          {/* </>  } */}

          {/* {authStore.loginStatus && */}
            <>
              <div className="md:ml-64" style={{ marginTop: '12%' }}>
                <Route exact path="/deptadmin/applicationDetails" component={ApplicationDetails} />
                {/* <Route exact path="/admin/applicationinfo/:appcode" component={props => <ApplicationsInfo {...props} />} /> */}
                <Route exact path="/deptadmin/applicationinfo/:appcode/:appName" component={props => <ApplicationsInfo {...props} />} />
                <Route exact path="/deptadmin/adminappdetails" component={AdminAppDetails} />
                <Route exact path="/deptadmin/allowedopr" component={AdminAllowedOperations} />
                <Route exact path="/deptadmin/registration" component={Registration} />
                <Route exact path="/deptadmin/appregistration" component={AppRegistration} />
                <Route exact path="/deptadmin/keyregistration" component={KeyRegistration} />
                <Route exact path="/deptadmin/keymapping" component={KeyMapping} />

                <Route exact path="/deptadmin/keyinfoupdate" component={KeyInfoUpdate} />
                <Route exact path="/deptadmin/appdetails" component={AppDetails} />

                {/* <Route exact path="/deptadmin/invoice1" component={Invoicetable} /> */}
                {/* <Route exact path="/deptadmin/invoiceregistration" component={EditableTable} /> */}
                {/* <Route exact path="/deptadmin/deptwiseinvoice" component={DeptwiseInvoice} /> */}

                <Route exact path="/deptadmin" component={Dashboard} />
                <Route exact path="/deptadmin/reports" component={Report} />
                <Route exact path="/deptadmin/billing" component={Billing} />
                <Route exact path="/deptadmin/reportsapp" component={ReportApp} />
                <Route exact path="/deptadmin/billingapp" component={BillingApp} />
                <Route exact path="/deptadmin/appcharts/:appcode" component={AppWiseoprTransactionBarchart} />
                {/* <Route exact path="/deptadmin/chartforinvoice" component={ChartforInvoice} /> */}
                {/* <Route exact path="/deptadmin/invoicedetail" component={InvoiceDetail} /> */}
                {/* <Route exact path="/deptadmin/invoiceregistration" component={invoiceReg} /> */}
                <Route exact path="/deptadmin/aa" component={A} />
                <Route exact path="/deptadmin/toggle" component={ToggleButtons} />
                <Route exact path="/deptadmin/noofservices" component={CheckNoofServices} />

              </div>
            </>
          {/* } */}
          {/* {!authStore.loginStatus && */}
            <>
              <div className="md:ml-64" >
                <Route exact path="/deptadmin/LoginRequired" component={LoginRequired} />
                <Route exact path="/deptadmin/applicationinfo/:appcode" component={LoginRequired} />
                <Route exact path="/deptadmin/appdetails" component={LoginRequired} />
                <Route exact path="/deptadmin" component={LoginRequired} />
                <Route exact path="/deptadmin/reports" component={LoginRequired} />
                <Route exact path="/deptadmin/billing" component={LoginRequired} />
                <Route exact path="/deptadmin/reportsapp" component={LoginRequired} />
                <Route exact path="/deptadmin/billingapp" component={LoginRequired} />

              </div>
            </>
          {/* } */}
          <Route exact path="/deptadmin/Login" component={Login} />
          {/*=====================================After Login============================== */}
          <Route exact path="/deptadmin/SignIn" component={SingIn} />
          <Route path="/deptadmin/LoginRequired" component={LoginRequired} />

          {/* ////////////////////////////////////////////////////////////////////////////////// */}

          {/* 
          <Grid container spacing={0}>
            <Grid item lg={9} xs={12} sm={9}>

              <Route exact path="/adv" component={CarouselBtoT} />

            </Grid>
            <Grid item lg={3} xs={12} sm={3}>
              <Route exact path="/adv" component={News} />

            </Grid>
          </Grid> */}

          {/* <Route exact path="/" component={StaticDashboard} /> */}

          {/* <br></br> */}




          {/* <Grid container spacing={1}>
            <Grid item lg={12} xs={12}>
              <Route exact path="/adv" component={StaticDashboard} />
            </Grid> */}


          {/* <Route exact path="/adv" component={MultiCarousel} /> */}
          {/* <Route exact path="/" component={PhotosnVideos} /> */}
          {/* </Grid> */}

          {/* <Route exact path="/adv" component={ChatBot} /> */}
          {/* <Demo /> */}
          {/* <Footer1 /> */}
          {/* <Route exact path="/" component={Footer2} /> */}
          <Footer2 />


        </div>
      </ThemeProvider>
    </>
  );
}



export default App;
