import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
}
  from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Book from './components/BookList';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
