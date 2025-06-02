import {createRoot} from 'react-dom/client';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';
let root=document.getElementById('root');

createRoot(root).render(
    <>
    <Nav/>
    <Content/>
    <Footer/></>
)