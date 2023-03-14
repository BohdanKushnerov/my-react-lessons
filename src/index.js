import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

// const el1 = React.createElement('span', {children: 'Hello'})
// const el2 = React.createElement('span', {children: 'world!'})
//=================================================
// const el1 = <span>Hello</span>
// const el2 = <span>world!</span>

///////////////////////////////////////////////////////////
// const el = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: [el1, ' ', el2],
// });
//==============================================
// const el = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: ['Hello world!'],
// });
// console.log(el);

// const jsxEl = 
//   <div>
//     {el1}
//     {el2}
//   </div>

// console.log(jsxEl);

// createRoot(document.querySelector('#root')).render(jsxEl)

//////////////////////////////////////////////////////
// const data = {
//   id: "id-1",
//   url: "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   title: "Feathers. Art abstract",
//   price: 500,
//   author: {
//     tag: "ractapopulous",
//     url: "https://pixabay.com/users/ractapopulous-24766/"
//   },
//   quantity: 10,
// }

// ReactDOM.createRoot(document.querySelector('#root')).render(<App />)



//////////////////////////////////////////////////////

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);