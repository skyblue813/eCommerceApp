
import './App.css';
//import {commerce} from "@chec/commerce.js";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Product from './components/Products/Product';
import Products from './components/Products/Products';
import {Grid} from '@material-ui/core';
import Navbar from './components/Navbar';

function App() {

  console.log("during the render");
  return (
    <Grid container direction = 'column'>
      <Grid item>
      <Navbar/>
    </Grid>
    <Grid item container>
          <Grid item xs={false} sm={1} md={2} lg={2}></Grid>
          <Grid item xs={12} sm={10} md={8} lg={8}>
          
              <p>Productitems</p>
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

          
          </Grid>
          <Grid item xs={false} sm={1} md={2} lg={2}></Grid>
      </Grid>
      </Grid>
  );
}


export default App;