import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

interface user{
  firstName: string;
  lastName: string;
}

const user:user ={
  firstName: 'ahhaha',
  lastName : 'werwerw'
};

function formatName(user: user):string{
  return user.firstName + ' ' + user.lastName;
}


const element =(
  <h1>
    Hello,{formatName(user)}!
  </h1>
)


ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
