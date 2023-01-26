import React from 'react';
import { Fragment } from "react/cjs/react.production.min";
import ScrollToTop from "../src/components/routerScroll";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { StyleReset, ThemeProvider } from "atomize";
import Drawer from '../src/components/Drawer';
import Home from '../src/pages/Home';
import Features from '../src/pages/Features';
import Auth from '../src/pages/Auth';
import Started from '../src/pages/Started';
import Detail from '../src/pages/Detail';
import Deposit from '../src/pages/Deposit';
import Products from '../src/pages/Products';
const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
// 1. Create a client engine instance
const engine = new Styletron();


const theme = {
  colors: {
    black900: "#1d1d1e"
  }
};

function App() {
  return (
    <>
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <ThemeProvider theme={theme}>
          <StyleReset />
       <Router>
        <Fragment>
        <ScrollToTop/>
 
      <Drawer/>
    
      <br></br><br></br><br></br>
      <Routes>
          <Route path='/' exact  element={<Home/>} />
          <Route path='/Features' element={<Features/>} />
          <Route path='/Started' element={<Started/>} />
          <Route path='/Products' element={<Products/>} />
          <Route path='/Auth' element={<Auth/>} />
          <Route path='/Detail' element={<Detail/>} />
         <Route path='/Deposit' element={<Deposit/>} />

      </Routes>
   
     </Fragment>
    </Router>
    
        </ThemeProvider>
      </StyletronProvider>
    </>
  );
}

export default App;
