import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogData = [
    {name: 'Eugene', id: '1'},
    {name: 'Tanya', id: '2'}
]

let messageData = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'Hello!'},
    {id: 3, message: 'How are you?'}
]

let postsData = [
    {id: 1, message: 'Hello, how are you?', likesCount: 20},
    {id: 2, message: 'I studying a React)))', likesCount: 12},
    {id: 3, message: 'We are happy!', likesCount: 50}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogData={dialogData} messageData={messageData} postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
