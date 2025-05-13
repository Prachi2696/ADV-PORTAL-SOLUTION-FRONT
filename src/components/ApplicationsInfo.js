import { Card, CardBody } from '@material-tailwind/react';
import { useTheme } from '@material-ui/core';
import { Grid } from '@mui/material';
import React from 'react';
import { AppChart } from './AppChart';
import { AppWiseoprTransactionBarchart } from './AppWiseOprTransactionBarchart';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
const ApplicationsInfo = () => {
  const { appName } = useParams();
  const appname = appName;

  const theme = useTheme()
  return (
    <div style={{ paddingBottom: '300px' }}>
      
      <center>
        <h1 style={{ color: theme.typography.primary.mainheading }}><b>Operation-wise Transactions</b> </h1>
        <hr/>
        <b style={{ color: 'maroon' }} > {appname} </b>
        <CardBody>
          <Grid container spacing={2} style={{ backgroundColor: theme.tablecontainer.backgroundColor }}>
            <Grid item lg={2} style={{ backgroundColor: theme.tablecontainer.backgroundColor }} >
            </Grid>
            <Grid item lg={8} style={{ backgroundColor: theme.tablecontainer.backgroundColor }} >
              <AppChart />
              {/* <AppWiseoprTransactionBarchart /> */}


            </Grid>
            <Grid item lg={2} style={{ backgroundColor: theme.tablecontainer.backgroundColor }} >
            </Grid>
          </Grid>
    
        </CardBody>
      </center>
    </div>
  );
}

export default ApplicationsInfo;
