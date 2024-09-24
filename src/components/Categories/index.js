import React from 'react';
import { Container } from 'react-bootstrap';
import categoryicon from "./categories_6724239.png"
import Slider from 'react-slick';
import cat1 from "../../components/Categories/social-media_4187336.png"
import cat2 from "../../assests/login_7856337.png"
import cat3 from "../../assests/login_7856337.png"
import cat4 from "../../assests/login_7856337.png"
import './index.css'

const carasoul = [
{image: cat1, title:"abc"},
{image: cat2, title:"def"},
{image: cat3, title:"igk"},
{image: cat4, title:"lmn"}
];
const Categories = ()=>{
var settings={
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  nav:false,
  responsive:[
    {
  breakpoint:1025,
  settings:{
    slidesToShow:3,
    slidesToScroll:3,
    infinite: true,
    dots: true
    }
    },
    {
      breakpoint:600,
      settings:{
        slidesToShow:2,
        slidesToScroll:2,
        initialSlide:2,
        nav:false,
        }
    },
    {
      breakpoint:480,
      settings:{
        slidesToShow:1,
        slidesToScroll:1,
        nav:false,
    }
  }
  ]
};
  return(
<div className='our-categories moile'>
  <Container>
    <img className='book-icon' src={categoryicon} alt='Book Icon'/>
    <h3 className="cat-title">Our Top Categories</h3>

    <Slider {...settings}>
      {carasoul.map((category,index)=>(
        <div className='slider-item mobile-sliders'
        tabIndex={-1}
        style={{width:"100%",display:"inline-block"}}
        key={index}
        >
        <img className="w-100" src={category.image} alt={category.title} />
        <div className="overlay123" />
        <h3 className="servicetext">{category.title}</h3>

        </div>
      ))}
    </Slider>
  </Container>
</div>
  );
}
export default Categories
