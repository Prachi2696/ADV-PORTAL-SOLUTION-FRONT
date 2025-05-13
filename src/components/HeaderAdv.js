import { Grid, Typography } from '@mui/material';
import * as React from 'react';
// import advlogo from '../assets/img/advlogo.png';
import advlogo from '../assets/img/ADV logo-01.png';

import govi from '../assets/img/gov2.png';
import { useTranslation } from "react-i18next";
import { yellow } from '@mui/material/colors';
import { useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import G20logo from '../assets/img/GS20.jpg'

function HeaderAdv() {
  const isMobile = window.innerWidth <= 768;
  // const { t } = useTranslation();
  const theme = useTheme();
  const history = useHistory();
  const handleADVimg = (e) => {
    // alert('hi')
    history.push('/adv')
  }



  // const handleMiety=(e)=>{
  //   history.push("https://www.meity.gov.in/");
  // }
  return (
    <>


      <Grid container spacing={{ xs: 0, md: 0, lg: 0, sm: 0 }} columns={{ lg: 34, xs: 12, md: 12, sm: 12 }} style={{ width: '100%', backgroundColor: theme.grid.backgroundColor, top: '26px', position: 'fixed', zIndex: isMobile ? '2' : '2', height: isMobile ? 'auto' : 'auto' }}>
        <Grid item lg={2} xs={1} md={3} sm={6}>
          <div style={{ paddingTop: 'auto', paddingBottom: 'auto' }} align='center'>
            {/* <a
              target="_blank"
              href="/"> */}
            <img src={advlogo} onClick={handleADVimg} style={{ width: isMobile ? '30px' : '85px', marginTop: '0px',height:isMobile?'30px':'70px' }} />
            {/* </a> */}
          </div>
        </Grid>

        <Grid item lg={9} xs={3} md={3} sm={6} style={{}}>
          {/* <a
            target="_blank"
            href="https://advservice.epramaan.gov.in/dashboard/"
            style={{ color: 'black', textDecoration: 'none', cursor: 'pointer', }}  > */}

          <Typography variant={isMobile ? 'h7' : 'h4'} style={{ paddingTop: '10px', paddingBottom: 'auto', background: 'linear-gradient(to right,orange , #30CFD0 )', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bolder', fontFamily: 'serif', }}>
            &nbsp; Aadhaar Data Vault

          </Typography>
          {/* <div style={{ paddingTop: 'auto', paddingBottom: 'auto' }} align='left'>
           
            <a href='https://www.g20.org/en/'>
              <img src={G20logo} style={{ width: isMobile ? '40px' : '80px', marginTop: '12px' }} />
            </a>

          </div> */}

          {/* </a> */}
        </Grid>
        <Grid item lg={4} xs={1} md={1} sm={6} >
          <div style={{ paddingTop: 'auto', paddingBottom: 'auto' }} align='left'>

            <a href='https://www.g20.org/en/'   target="_blank">
              <img src={G20logo} style={{ width: isMobile ? '40px' : '80px', marginTop: '12px' }} />
            </a>
          </div>
        </Grid>
        <Grid item lg={17} xs={6} md={3} sm={6}>
          <div align='right' style={{ right: '0px' }}>


            <Typography variant={isMobile ? 'caption' : 'h6'} align='right'
              style={{ fontWeight: 'bold', textDecoration: 'none', cursor: 'pointer', color: 'black', right: '0px', paddingTop: '0px', color: theme.typography.color }}
            //  onClick={handleMiety}
            >
              <a
                target="_blank"
                href="https://www.meity.gov.in/">
              Ministry of Electronics & Information Technology</a>
            </Typography>

            <Typography variant={isMobile ? 'caption' : 'h7'} style={{ float: 'right', textDecoration: 'none', cursor: 'pointer', color: 'black', color: theme.typography.color, }}>Government of India</Typography>
            {/* <h4 style={{ float: 'right', textDecoration: 'none', cursor: 'pointer', color: 'black', color: theme.typography.color }} >Government of India</h4> */}
        </div>

      </Grid>
      <Grid item lg={2} xs={1} md={3} sm={6}>
        <div align='center'>

          <a
            target="_blank"
            href="https://www.meity.gov.in/">
            <img src={govi} style={{ right: '0px', marginTop: '5px', width: isMobile ? '20px' : '35px' }} />
          </a>
        </div>
      </Grid>
    </Grid >


    </>
  );
}
export default HeaderAdv;