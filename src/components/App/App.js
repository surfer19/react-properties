import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from "react-router-dom"
import configureStore from '../../redux/configureStore';
import PropertyList from "../PropertyList/PropertyList";

const store = configureStore()

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
          <Provider store={store}>
            <HashRouter basename="/">
              <Route exact path="/" component={PropertyList} />
            </HashRouter>
          </Provider>
      </div>
    </div>
  );
}

export default App;
