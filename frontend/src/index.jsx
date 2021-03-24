import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import axios from 'axios';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// window.axios = axios;


document.addEventListener('DOMContentLoaded', () => {
// Render our root component and pass in the store as a prop
const root = document.getElementById('root');

ReactDOM.render(<Root store={store} />, root);
});