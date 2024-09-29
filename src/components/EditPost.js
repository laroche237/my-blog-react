import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './EditPost.css'

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/posts/${id}`);
      setTitle(res.data.title);
      setContent(res.data.content);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedPost = {
      title,
      content,
      date: new Date().toISOString()
    };
    try {
      await axios.put(`http://localhost:5000/posts/${id}`, updatedPost);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='EditPost'>
      <h2>Edit Post</h2>
      <form onSubmit={handleUpdate}>
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
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;