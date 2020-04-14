import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux'








// --- local
import store from './redux/store';
import ProductCompareWrapper from './components/product-compare-wrapper/ProductCompareWrapper';


function App() {
  return (
    <Provider store={store}>
        <div className="App" style={{
            backgroundColor: '#f7f7f7'
        }}>
          <ProductCompareWrapper />

          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
    </Provider>
  );
}

export default App;
