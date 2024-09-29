import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/posts');
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/posts/${id}`);
      setPosts(posts.filter(post => post.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="home">
      <h2>Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link className='link'  to={`/post/${post.id}`}>{post.title}</Link>
              <button onClick={() => deletePost(post.id)}>Delete</button>
              <Link className='link' to={`/edit/${post.id}`}><button>Edit</button></Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;