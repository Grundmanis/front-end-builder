import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {WorkPanel} from "./components/WorkPanel";
// import {renderToString} from "react-dom/server";

const container = document.getElementById('root')!;
const root = createRoot(container);
const template = <Provider store={store}>
    {<App/>}
</Provider>;
// const html = renderToString(template);
// console.log(html);

root.render(
  <React.StrictMode>
      {template}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
