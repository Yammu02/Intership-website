// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Navbar from './Navbar';
// import Signup from './Signup';
// import Login from './Login';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
  
//     <Navbar/>
//     <Routes>
//       <Route path='App' element={<App/>}></Route>
//       <Route path='Signup' element={<Signup/>}></Route>
//       <Route path='Login' element={<Login/>}></Route>
//     </Routes>

//   </BrowserRouter>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from './Signup';
import Login from './Login';
import Nav from './Nav';
import Same from './Same';
import Studentpage from './studentpage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Admin from './Admin';
import Student from './Student';
import Edit from './Edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='App' element={<App/>}></Route>
      <Route path='Same' element={<Same/>}></Route>
      <Route path='Signup' element={<Signup/>}></Route>
      <Route path='Login' element={<Login/>}></Route>
      <Route path='Admin' element={<Admin/>}></Route>
      <Route path='Studentpage/:id' element={<Studentpage/>}></Route>
      <Route path='Student' element={<Student/>}></Route>
      <Route path="studentpage" element={<Studentpage/>}></Route>
      <Route path="Edit" element={<Edit/>}></Route>
      

  
    </Routes>

  </BrowserRouter>
);

reportWebVitals();