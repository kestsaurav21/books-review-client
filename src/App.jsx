import { useState } from 'react';
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookList from './pages/BookList';
import Signup from './pages/SignUp';
import Login from './pages/Login';

function App() {
  
  return (
    <>

    <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signup' element={<Login />} />
          <Route path='/booklist' element={<BookList />} />
          
        </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
