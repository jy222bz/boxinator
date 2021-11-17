import React from 'react';
import Form from './components/Form/FormComponent';
import ListBoxes from './components/Listboxes/ListBoxesComponent';
import Header from './components/Navbar/Navbar';
import Error from './components/PageNotFound/PageNotFound';
import { HashRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux"
import store from "../src/redux/store"



/**
 * The entry point to the APP.
 * @author Jacob Yousif
 *
 * @return {*} 
 */
function App() {
  return (
    <Provider store={store}>
      <HashRouter hashType="slash">
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' ><Form /></Route>
            <Route exact path='/addbox' ><Form /></Route>
            <Route exact path='/listboxes' ><ListBoxes /></Route>
            <Route path='*'><Error /></Route>
          </Switch>
        </div>
      </HashRouter>
    </Provider>
  )
}

export default App;

