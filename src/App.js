import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import StockRow from './components/StockRow.js';
import Index from './components/Index/Index.js';

function App() {
  return (
    <div className="index">
    
    
      <div className="App">
        <div className="container">
          <table className="table mt-5">
            <thead>
              <th>Ticker</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
            </thead>
            <tbody>
              <StockRow ticker="aapl" />
              <StockRow ticker="googl" />
              <StockRow ticker="msft" />
              <StockRow ticker="tsla" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
