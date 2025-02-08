import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function MyApp(){
//   return(
//     <h1>custom App </h1>
//   )
// }// for creating new function -jsx convert this function into tree
// const reactElement={
//   type:'a',
//   props:{
//     href:'https://google.com',
//     target:'_blank'
//   },
//   children:'click me to visit google'
// } this is not valid syntax for react doesnot understand this syntax it take specific syntax 

// const anotherElement=(
//   <a href="https..." target='_blank'>visit</a>//it works correctly because it directly take any html predifined stucture
// )
// const ReactElement=React.createElement(
//   'a',//first expact tag
//   {
//      href:'https//google.com',//atributes,
//      target:'_blank'
//   },
//   'click me tovisit google'//children
// ) it is react predifened structure if that type of structure we give then only react undrstand what we want to do


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
