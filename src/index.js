import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'antd/dist/antd.css';
import Header from "./header/Header";
import _Table from "./components/_Table";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header/>
      <_Table/>
      <BrowserRouter>
          <App />

      </BrowserRouter>
  </React.StrictMode>
);
