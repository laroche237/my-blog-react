import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import PostDetail from './components/PostDetail';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/add">Add Post</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </div>
  );
};

export default App;
