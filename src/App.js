import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Nav from './Nav';
import { Helmet } from 'react-helmet';
import logo from './Logo.svg'

function App() {
  return (
  <div className='container'>
    <Helmet>
        <meta charSet="utf-8" />
        <title> little-lemon </title>
        <meta name="description" content="My little lemon site. On this site we can reserve a table for take food with guess"/>
        <meta name="og:title" content="Little lemon site "/>
        <meta name="og:description" content=""/>
        <meta name="og:image" content={logo} />
    </Helmet>

    <Header/>
    <Nav/>
    <Main/>
    <Footer/>
  </div>
  );
}

export default App;
