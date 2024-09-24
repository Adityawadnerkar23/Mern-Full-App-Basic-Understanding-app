import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../assests/user_166246.png';
import leftlogo from '../assests/work-progress_5578703.png';

const CollapsibleExample = () => {
  const[language,Setlanguage]=useState('english')
  const handleLang = (e)=>{
Setlanguage(e.target.value)
if(e.target.value==='arabic'){
    document.body.dir='ltr';
    document.body.lang='arabic';
  }
  else{
    document.body.dir='ltr';
    document.body.lang='en';
  }
};
const navigate = useNavigate(); 

const handleLoginClick = () => {
navigate('/register'); // direct registraion method
};
const handlelogout =()=>{
navigate('/')
}

return (
<div>
    <Navbar expand="lg" className="sm">
    <Container>
    <Navbar.Brand onClick={()=>navigate('/addressform')} className='ps-2'>
    <img className="leftlogo" width="60px" src={leftlogo} alt="" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="justify-content-center flex-grow-1">
    <Nav.Link href="/addressform">PRODUCT FORM</Nav.Link>
    <Nav.Link href="/categoryform">CATEGORY FORM</Nav.Link>
    <Nav.Link href="/bookstore">BOOK STORE</Nav.Link>
    <Nav.Link> 
      
<select name="language" id="language" value={language} onChange={handleLang}>
<option value="english">English</option>
<option value="arabic">Arabic</option>
</select>
</Nav.Link>
    <Nav.Link >
      <i className='fa fa-envelope' aria-hidden="true"></i>
      {language ==='arabic'?'البريد الإلكتروني: arabic@gmail.com':'Email: arabic@gmail.com' }
    </Nav.Link>
    <Nav.Link>
<i className="fa fa-phone" aria-hidden="true"></i>
{language === 'english' ? 'Call us: +91 98765 43210' : 'اتصل بنا: +91 98765 43210'}
</Nav.Link>


    </Nav>
    <Button className='logout'onClick={()=>handlelogout()}>
    <img className='logo' width='60px' src={logo} alt="/"/>
    <i className="fa fa-user pe-1" aria-hidden="true">LOGOUT</i>
    </Button>
    </Navbar.Collapse>
    </Container>
    </Navbar>
</div>
);
}

export default CollapsibleExample;
