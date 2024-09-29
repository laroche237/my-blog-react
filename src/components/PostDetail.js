import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/posts/${id}`);
      setPost(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!post) return <p>No post</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p><em>{new Date(post.date).toLocaleString()}</em></p>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;