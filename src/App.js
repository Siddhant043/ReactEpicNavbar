import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import ContactUs from './components/contact-us/ContactUs';
import Services from './components/services/Services';
import Products from './components/products/Products';
import SignUp from './components/signup/SignUp';
import Consulting from './components/consulting/Consulting';
import Marketing from './components/marketing/Marketing';


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/sevices' exact component={Services}/>
      <Route path='/products' exact component={Products}/>
      <Route path='/contact-us' exact component={ContactUs}/>
      <Route path='/sign-up' exact component={SignUp}/>
      <Route path='/consulting' exact component={Consulting}/>
      <Route path='/marketing' exact component={Marketing}/>
      </Switch>
    </div>
  );
}

export default App;
