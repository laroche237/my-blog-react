import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './AddPost.css'

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      id: uuidv4(),
      title,
      content,
      date: new Date().toISOString()
    };
    try {
      await axios.post('http://localhost:5000/posts', newPost);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='Addpost'>
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className='title'>
          <label>Title:</label><br />
          <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className='content'>
          <label>Content:</label><br />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button  className="btn_add" type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;