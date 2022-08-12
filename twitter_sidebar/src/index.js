import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from "react";
import { render } from "react-dom";

const rootElement = document.getElementById("root");
render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
