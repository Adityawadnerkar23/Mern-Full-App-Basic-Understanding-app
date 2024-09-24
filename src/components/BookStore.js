import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Addbooks from './AddBooks';
import Booklist from './BookList';
import SearchBook from './SearchBook';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../components/Bookstore.css';

const Bookstore = () => {
alert('This Page Has The MaxiMum Functionality')
return (
    <div className="bookstore-container">
    <Navbar className="navbar-custom" />
    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" 
    className="mb-5">
    <Tab eventKey="home" title="Add books">
    <TransitionGroup>
    <CSSTransition key="addbooks" timeout={500} classNames="fade">
    <div className="tab-content">
    <Addbooks />
    </div>
    </CSSTransition>
    </TransitionGroup>
    </Tab>
    <Tab eventKey="profile" title="Search books">
    <TransitionGroup>
    <CSSTransition key="searchbooks" timeout={500} classNames="fade">
    <div className="tab-content">
    <SearchBook/>
    </div>
    </CSSTransition>
    </TransitionGroup>
    </Tab>
    <Tab eventKey="contact" title="Show List">
    <TransitionGroup>
    <CSSTransition key="booklist" timeout={500} classNames="fade">
    <div className="tab-content">
    <Booklist />
    </div>
    </CSSTransition>
    </TransitionGroup>
    </Tab>
    </Tabs>
    </div>
);
};

export default Bookstore;
