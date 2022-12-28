import React from "react";
import Box from "@mui/material/Box";
import Sidenav from "../../Menubar/Sidenav";
import Navbar from "../../Menubar/Navbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import '../Dashboard/dash.css'
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CountUp from 'react-countup';


const Dashboard = () => {
  return (
   
    <div className="bgcolor">
    <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card sx={{ minWidth: 49 + "% " , height:150 }} className="gradient">
                  <CardContent>
                    <div className="iconstyle">
                      <CreditCardIcon/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div"  sx={{ color:"#ffffff"}}>
                     $<CountUp delay={0.4} end={500.00} duration={0.3}/>
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color:"#ccd1d1"}}>
                     Total Earnings
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ minWidth: 49 + "% " , height:150  }} className="gradientlight">
                  <CardContent>
                  <div className="iconstyle">
                      <ShoppingBagIcon/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div"  sx={{ color:"#ffffff"}}>
                    $<CountUp delay={0.4} end={900.00} duration={0.3}/>
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color:"#ccd1d1"}}>
                     Total orders
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>

            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card className="gradientlight">
                  <Stack spacing={2} direction="row">
                    <div className="iconstyle">
                    <StorefrontIcon/>
                    </div>
                    <div className="paddingall">
                    <span className="pricetitle">$<CountUp delay={0.4} end={203} duration={0.3}/>K</span>
                    <br/>
                    <span className="pricesubtitle">Total income</span>
                    </div>
                    </Stack>
                </Card>

                
                <Card>         
                  <Stack spacing={2} direction="row">
                    <div className="iconstyleblack">
                    <StorefrontIcon/>
                    </div>
                    <div className="paddingall">
                    <span className="pricetitle">$<CountUp delay={0.4} end={203} duration={0.3}/>K</span>
                    <br/>
                    <span className="pricesubtitle">Total income</span>
                    </div>
                    </Stack>   
                </Card>

              </Stack>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
            <Card sx={{ height:60 + "vh" }}>
                  <CardContent>
                    
                  </CardContent>
                </Card>
            </Grid>

            <Grid item xs={4}>
            <Card sx={{ height:60 + "vh" }}>
                  <CardContent>
                    
                  </CardContent>
                </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
      
  
  );
};

export default Dashboard;
