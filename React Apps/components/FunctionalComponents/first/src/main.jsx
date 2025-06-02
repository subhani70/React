import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import ArrowFunction from './components/ArrowFunction.jsx'
import Function2 from './components/Function2.jsx'
import Arrow2 from './components/Arrow2.jsx'
import Anonymouus from './components/Anonymous.jsx'
import EmptyFragment from './components/EmptyFragment.jsx'
import Nav from './components/Nav.jsx'
import MappingText from './components/MappingText.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ArrowFunction />
    <Function2 />
    <Arrow2 />
    <Anonymouus/>
    <EmptyFragment/>
    <hr />
    <Nav/>
    <hr />
    <MappingText />
  </>
)
