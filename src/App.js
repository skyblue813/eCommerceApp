//import {commerce} from './lib/commerce';
//import { useEffect, useState } from 'react';
import './App.css';
//import Commerce from "@chec/commerce.js";
import {BrowserRouter,Route} from "react-router-dom";
import Product from './components/Product';
import Products from './components/Products';


function App() {
  
  return (
    <div>
      <header>
        <p>Products</p>
        </header>
        <main>
        <BrowserRouter>
        
           <Route exact path ="/" components = {Products}/>
            <Route exact path ="/ProductID" components = {Product}/>
            
      </BrowserRouter>
        
      </main>
    
    </div>
  );
}

export default App;
