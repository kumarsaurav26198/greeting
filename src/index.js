import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

let curDate = new Date(
  // 2020, 12, 12, 19
);
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {};
if (curDate >= 1 && curDate < 12)
{
  greeting = "Good Morning";
  cssStyle.color = "green";
}
else if (curDate >= 12 && curDate < 19)
{
  greeting = "Good AfterNoon";
  cssStyle.color = "orange";
}
else if (curDate >= 19 && curDate < 24)
{
  greeting = "Good Night";
  cssStyle.color = "Blue";
}



ReactDOM.render(
  <React.StrictMode>
    <>
      <div className="boddyy">
        {/* <h1>Welcome to Magnet World, it's {curDate} O'Clock.</h1> */}
        <h2> Hello Sir, <span style={cssStyle}>{greeting}</span>.</h2>
      </div>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
