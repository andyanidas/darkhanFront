import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentProvider from "./contexts/Content";
import { UserProvider } from "./contexts/UserContext";
import NewsProvider from "./contexts/NewsContext";
ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <NewsProvider>
        <ContentProvider>
          <React.StrictMode>
            <App />
            {/* <Test /> */}
          </React.StrictMode>
        </ContentProvider>
      </NewsProvider>
    </UserProvider>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
