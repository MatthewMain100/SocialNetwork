// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'

import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import NewsContainer from './components/News/NewsContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import PhotosContainer from './components/Photos/PhotosContainer';

const App = (props) => {

return (
  <BrowserRouter> 
    <div className='app-wrapper'>
      <Header />
      <Navbar />               
      <div className='app-wrapper-content'>                    

        <Route  path="/dialogs" render={ ()=> <DialogsContainer />}/>

        <Route  path ="/profile" render={ ()=> <Profile />}/>

        <Route  path ="/news" render={ ()=> <NewsContainer />}/>

        <Route  path ='/users' render={ ()=> <UsersContainer />}/>

        <Route  path ='/photos' render={ ()=> <PhotosContainer />}/>


      </div>               
    </div>
  </BrowserRouter>
)}

export default App
