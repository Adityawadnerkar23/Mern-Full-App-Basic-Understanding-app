        import React from 'react'
        import Slider from 'react-slick';
        import banner from '../Banner/user_166246.png'
        import { Col, Container, Row } from "react-bootstrap";
        import Navbar from '../Navbar'
        import Categories from '../Categories';
        import "./index.css"
        const Homepage = () => {
        var settings ={
        dots: false,
        infinite: false,
        speed: 500,
        slideshow:1,
        slidestoscroll:1,
        initialSlide:0,
        responsive:[
        {
        breakpoint: 1024,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:false,
        dots:false,
        }
        },
        {
        breakpoint:600,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide:0,
        }
        },
        {
        breakpoint:480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        }
        }
        ]
        };
        return(
          <div className="home-container">
        <Navbar className=" fixed-navbar navbar-custom" />
        <div className='home-banner'>
        <Container>
        <Slider {...settings}>
        <div>
        <Row>
        <Col lg={6}>
        <h3 className="banner-title">
        Life of the Wild
        </h3>
        <p className="banner-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam interdum dolor, egestas tempus augue egestas in.
        </p>
        <button className="read-more">
        Read More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </button>
        </Col>
        <Col lg={2}>
        <img className="w-100" src={banner} />
        </Col>
        </Row>
        </div>
        <div>
        <Row>
        <Col lg={6}>
        <h3 className="banner-title">
        Life of the Wild
        </h3>
        <p className="banner-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam aliquam interdum dolor, egestas tempus augue egestas in.
        </p>
        <button className="read-more">
        Read More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </button>
        </Col>
        <Col lg={2}>
        <img className="w-100" src={banner} />
        </Col>
        </Row>
        </div>
        <div>
        <Row>
        <Col lg={6}>
        <h3 className="banner-title">
        Life of the Wild
        </h3>
        <p className="banner-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam interdum dolor, egestas tempus augue egestas in.
        </p>
        <button className="read-more">
        Read More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </button>
        </Col>
        <Col lg={2}>
        <img className="w-100" src={banner} />
        </Col>
        </Row>
        </div>
        </Slider>
        </Container>
        </div>
        <br/>
        <Categories/>
        </div>
        );
        }
        export default Homepage
