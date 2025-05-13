import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import carouselimg1 from '../assets/img/advcarausal.jpeg';
// import carouselimg2 from '../assets/img/advcarausal2.jpeg';
import carouselimg3 from '../assets/img/m1.jpg';
// import carouselimg4 from '../assets/img/finalalone.jpg';
// import carouselimg4 from '../assets/styles/finalalone.png'

const images = [
    {
        // label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath: carouselimg1
        // imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    // {
    //     imgPath:carouselimg2
    // },
    {
        imgPath:carouselimg3
    },
    // {
    //     imgPath:carouselimg4
    // }
   
    // { 
    //     // label: 'Bird', imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60', 
    //     src:'advcarausal2.jpeg'
    // },
    // // { label: 'Bali, Indonesia', imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250', },
    // // { label: 'Goč, Serbia', imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60', },
    // {
    //     src:'m1.jpg'
    // }

];

export default function Carousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <>
      
        <Box sx={{ maxWidth: 1300, flexGrow: 1 }} >
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            >
                <Typography>{images[activeStep].label}</Typography>
            </Paper>
            <Box
                sx={{
                    height: 255,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                }}
            >
                <img
                    src={images[activeStep].imgPath}
                    // alt={images[activeStep].label}
                    style={{ width: '100%', maxHeight: '100%' }}
                />
                {/* <img src={carouselimg1}/> */}
            </Box>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>




        </>


    );
}