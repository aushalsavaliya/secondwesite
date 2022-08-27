import logo from './logo.svg';
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import { Route, Switch } from 'react-router-dom';
import Home from './Container/Home/Home';
import Cart from './Container/Shop/Cart';
import Checkout from './Container/Shop/Checkout';
import Product from './Container/Shop/Product';
import Shope from './Container/Shop/Shope';
import Elements from './Container/Pages/Elements/Elements';
import Contact from './Container/Contact/Contact';
import Blog from './Container/Blog/Blog';
import Blogdetailes from './Container/Blog/Blogdetails';
import Tracking from './Container/Pages/Tracking/Tracking';




function App() {
  return (
    <>
    <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/Shope"} component={Shope} />
        <Route exact path={"/Cart"} component={Cart} />
        <Route exact path={"/Checkout"} component={Checkout} />
        <Route exact path={"/Product"} component={Product} />
        <Route exact path={"/Elements"} component={Elements} />
        <Route exact path={"/Tracking"} component={Tracking} />
        <Route exact path={"/Contact"} component={Contact} />
        <Route exact path={"/Blog"} component={Blog} />
        <Route exact path={"/Blogdetails"} component={Blogdetailes} />
      </Switch>
      <Footer />      
    </>
  );
}

export default App;
