import { Card, Box, Grid } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
// import Carousel from 'react-material-ui-carousel';
import "react-multi-carousel/lib/styles.css";
import Carouselimg1 from '../assets/img/img-6.jpg';
import Carouselimg2 from '../assets/img/img-1.jpg';
import { borderRadius } from "@mui/system";
import Paper from '@mui/material/Paper';
import Carouselimg3 from '../assets/img/img-8.jpg';
import Carouselimg4 from '../assets/img/img-1.jpg';
import ADVVideos from "../components/ADVVideos";
import video1 from '../assets/videos/Department_Registration.mp4'
// import  {Heading} from 'react-pptx';
// import {Deck}from 'react-pptx';
// import {Slide} from 'react-pptx';
// import video1 from '../assets/videos/Department_Registration.mp4'
// import PhotosnVideos from "../components/PhotosnVideos";
// import { Deck } from 'react-pptx';
import { Presentation } from 'react-pptx';
import PPT from "../components/PPT";

export default function Photos() {
    const itemStyle = {
        padding: "0 0 0 0px",// add 10px space to the left and right of each item
        width: '500px',
        height: '250px'

    };

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (
        <>
            {/* style={{width:'100%',height:'200px'}} */}
            <div style={{ height: '200px' }}>
                <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={1200} animation="slide"  >

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                // width: 470,
                                height: '200px',

                            },




                        }}

                        style={{ borderTopRightRadius: '10px' }}
                    >

                        <Paper elevation={6}  >
                            <img src={Carouselimg1} alt="Image 1" style={itemStyle} />
                        </Paper>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                // width: 470,
                                height: 'auto',

                            },



                        }}

                        style={{ borderTopRightRadius: '10px' }}
                    >

                        <Paper elevation={6} >
                            <img src={Carouselimg2} alt="Image 1" style={itemStyle} />
                        </Paper>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                // width: 470,
                                height: 'auto',

                            },



                        }}

                        style={{ borderTopRightRadius: '10px' }}
                    >

                        <Paper elevation={6} >
                            <img src={Carouselimg2} alt="Image 1" style={itemStyle} />
                        </Paper>
                    </Box>

                    {/* <Box
sx={{
    display: 'flex',
    flexWrap: 'wrap',
    '& > :not(style)': {
        m: 1,
        width: 280,
        // height: 200,
       
    },



}}

style={{ borderTopRightRadius: '10px' }}
>

<Paper elevation={6} >
    <img src={Carouselimg3} alt="Image 1" style={itemStyle} />
</Paper>
</Box>

<Box
sx={{
    display: 'flex',
    flexWrap: 'wrap',
    '& > :not(style)': {
        m: 1,
        width: 280,
        // height: 200,
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
    },



}}

style={{ borderTopRightRadius: '10px' }}
>

<Paper elevation={6} >
    <img src={Carouselimg4} alt="Image 1" style={itemStyle} />
</Paper>
</Box>


<Box
sx={{
    display: 'flex',
    flexWrap: 'wrap',
    '& > :not(style)': {
        m: 1,
        width: 280,
        // height: 200,
      
    },



}}

style={{ borderTopRightRadius: '10px' }}
>

<Paper elevation={6} >
    <img src={Carouselimg1} alt="Image 1" style={itemStyle} />
</Paper>
</Box>

<Box
sx={{
    display: 'flex',
    flexWrap: 'wrap',
    '& > :not(style)': {
        m: 1,
        width: 280,
        // height: 200,
       
    },



}}

style={{ borderTopRightRadius: '10px' }}
>

<Paper elevation={6} >
    <img src={Carouselimg1} alt="Image 1" style={itemStyle} />
</Paper>
</Box> */}




                </Carousel>
            </div>
        </>
    )


}