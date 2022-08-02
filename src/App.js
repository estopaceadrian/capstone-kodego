import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Pricing from './pages/Pricing/Pricing';
import Footer from './components/Footer/Footer';
import Contact from './pages/ContactUs/ContactUs';
import Directions from './components/GeoLocation/index';
class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <BrowserRouter>
            <Menu />
            <div>
              <Route path="/" exact component={Home} />
              <Route path="/about-us" exact component={AboutUs} />
              <Route path="/pricing" exact component={Pricing} />
              <Route path="/contact-us" exact component={Contact} />
              <Route path="/maps" exact component={Directions} />
            </div>
            <Footer />
          </BrowserRouter>
        </div>
      </>
    );
  }
}

export default App;
