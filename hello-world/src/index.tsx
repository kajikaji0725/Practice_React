import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// interface User{
//   firstName: string;
//   lastName: string;
// }

// interface Props{
//   name: String;
// }

// interface Props2{
//   date: Date;
// }

// const user:User ={
//   firstName: 'ahhaha',
//   lastName : 'werwerw'
// };

// function formatName(user: User):string{
//   return user.firstName + ' ' + user.lastName;
// }

// function Welcome(props: Props){
//   return <h1>Hello, {props.name}</h1>
// }

// function App(){
//   return(
//     <div>
//       <Welcome name="sara" />
//       <Welcome name="hoge" />
//       <Welcome name="hora" />
//     </div>
//   )
// }

// function Example(){
//   const [count,setCount] = useState(0);

//   return(
//     <div>
//       <p>You clicked {count} times </p>
//       <button onClick={() => setCount(count+1)}> Click me </button>
//     </div>
//   )
// }

// function Clock(props: Props2){
//   return(
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toString()}.</h2>
//     </div>
//   );
// }

// //なんでこれでできるんじゃ？？？？？
// function tick(){
//   ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//   )
// }

// setInterval(tick,1000);

// function App(){
//   return(
//     <>
//       {element}
//       <Clock date={new Date()} />
//     </>
//   );
// }

// const element =(
//   <h1>
//     Hello,{formatName(user)}!
//   </h1>
// )

// const d :number = 324

// const element = <div>hogehoge</div>

// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>horahorahora</h2>
//   </div>
// )

// const element= <Welcome name="sara" />;

const element = <div>hogehoge</div>;

function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toString()}.</h2>
    </div>
  );
}

function App(): JSX.Element {
  const now = new Date();
  return (
    <>
      {element}
      {now.toString()}
      <Clock />
    </>
  );
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
