import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Card } from '@mui/material';
import Carouselimg1 from '../assets/img/m1.jpg';
import Carouselimg2 from '../assets/img/advcarausal.jpeg';
import { useTranslation } from "react-i18next";
import video1 from '../assets/videos/Department_Registration.mp4'
// import Carouselimg3 from '../assets/img/advcarausal2.jpeg'

export default function ADVVideos(props) {
    const { t } = useTranslation();

    var items = [
        {
            // name: "Random Name #1",
            // description: "Probably the most random thing you have ever seen!",
            image: Carouselimg1
        },
        {
            // name: "Random Name #2",
            // description: "Hello World!",
            image: Carouselimg2
        },
        // {
        //     // name: "Random Name #2",
        //     // description: "Hello World!",
        //     image: Carouselimg3
        // }
    ];



    return (
        <>
            {/* <Card style={{ marginTop: '10px', width: '100%' }}>
                <div> */}
            {/* <br></br> */}
            <Carousel autoPlay={true} animation="slide" interval={5000} style={{ width: '100%' }}>
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel>
            {/* <Card style={{ backgroundImage: 'linear-gradient(to right, lightgrey , lightblue)' }}>
                        <p>{t("ADV_INFO_DASHBOARD")}
                            &nbsp; <a href='/adv/description' style={{ color: 'blue' }}>{t("More_info")}</a></p>

                    </Card> */}
            {/* </div>
            </Card> */}
        </>
    );
}

function Item(props) {
    return (
        <Paper>
            {/* <h2>{props.item.name}</h2> */}
            {/* <img style={{ width: '100%', height: 300 }} src={props.item.image} /> */}
            <video width='390px' height='300px' controls>
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* <p>{props.item.description}</p> */}

            {/* <Button className="CheckButton">Check it out!</Button> */}
        </Paper>
    );
}
