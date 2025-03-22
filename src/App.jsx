import './App.css';
import { useEffect } from 'react';
import { Home } from './Components/home';
import { About } from './Components/about';
import { Terms } from './Components/terms';
import { Footer } from './Components/footer';
import { Header } from './Components/header';
import { Privacy } from './Components/privacy';
import { Product } from './Components/product';
import { Contact } from './Components/contact';
import { Careers } from './Components/careers';
import { Services } from './Components/services';
import { PageNotFound } from './Components/notfound';
import { CaseStudies } from './Components/caseStudies';
import { BrowserRouter as Router, Switch, useLocation, Route } from 'react-router-dom/cjs/react-router-dom'

function App() { return <Router><AppContent /></Router> }

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/" render={() => { return <Home /> }}></Route>
        <Route exact path="/about" render={() => { return <About /> }}></Route>
        <Route exact path="/terms" render={() => { return <Terms /> }}></Route>
        <Route exact path="/product" render={() => { return <Product /> }}></Route>
        <Route exact path="/careers" render={() => { return <Careers /> }}></Route>
        <Route exact path="/contact" render={() => { return <Contact /> }}></Route>
        <Route exact path="/privacy" render={() => { return <Privacy /> }}></Route>
        <Route exact path="/services" render={() => { return <Services /> }}></Route>
        <Route exact path="/casestudies" render={() => { return <CaseStudies /> }}></Route>
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [pathname]);
  return null;
};

export default App;
