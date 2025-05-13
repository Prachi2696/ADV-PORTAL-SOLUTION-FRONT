
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Card } from '@mui/material';
import Carouselimg1 from '../assets/img/m1.jpg';
import Carouselimg2 from '../assets/img/advcarausal.jpeg';
import { useTranslation } from "react-i18next";
import pptslide1 from '../assets/ppt/ppt_slide1.jpg'
import pptslide2 from '../assets/ppt/ppt_slide2.jpg'


export default function PPT() {
  const { t } = useTranslation();

    var items = [
        {
            // name: "Random Name #1",
            // description: "Probably the most random thing you have ever seen!",
            image: pptslide1
        },
        {
            // name: "Random Name #2",
            // description: "Hello World!",
            image: pptslide2
        },
        // {
        //     // name: "Random Name #2",
        //     // description: "Hello World!",
        //     image: Carouselimg3
        // }
    ];

  return (
 <>
  {/* <Card style={{ marginTop: '10px', width: '100%' }}> */}
                <div style={{position:'relative', zIndex: 'initial'}}>
                    <Carousel autoPlay={true} animation="slide" interval={5000} style={{ width: '500px' }}>
                        {items.map((item, i) => (
                            <Item key={i} item={item} />
                        ))}
                    </Carousel>
                    
                </div>
            {/* </Card> */}
 </>
    
  );
}

function Item(props) {
  return (
      <Paper>
          {/* <h2>{props.item.name}</h2> */}
          <img style={{ width:'500px',height:'250px'}} src={props.item.image} />
          {/* <p>{props.item.description}</p> */}

          {/* <Button className="CheckButton">Check it out!</Button> */}
      </Paper>
  );
}