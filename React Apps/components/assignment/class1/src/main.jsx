import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import { Fragment } from 'react';

let root = document.getElementById('root');

createRoot(root).render(
    <Fragment>
        <Navbar></Navbar>
        <MainContent></MainContent>
        <Footer></Footer>
        </Fragment>
);