//import {commerce} from './lib/commerce';
//import { useEffect, useState } from 'react';
import './App.css';
//import {commerce} from "@chec/commerce.js";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Product from './components/Products/Product';
import Products from './components/Products/Products';




function App() {

  console.log("during the render");
  return (
    <div>
      <main>
        <BrowserRouter>
          <Switch>

            <Route path={["/Products/:ProductId"]}>
              <Product />
            </Route>

            <Route path={["/Products"]}>
              <Products />
            </Route >
          </Switch>

        </BrowserRouter>

      </main>
    </div>
  );
}









// function App() {  
//   return (
//     <div>
//       <header>
//         <p>Welcome to Priya's Botique</p>
//         </header>
//         <main>
//         <BrowserRouter>
        
//            <Route exact path ="/" components = {Products}/>
//             <Route exact path ="/Products/ProductID" components = {Product}/>
            
//       </BrowserRouter>
        
//       </main>
    
//     </div>
//   );
// }

export default App;
