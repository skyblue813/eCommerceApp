
import './App.css';
//import {commerce} from "@chec/commerce.js";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Product from './components/Products/Product';
import Products from './components/Products/Products';

function App() {

  console.log("during the render");
  return (
    <div>
      <h1>Welcome to Baby Shop!</h1>
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


export default App;