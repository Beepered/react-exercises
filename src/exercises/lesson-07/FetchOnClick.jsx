import './Lesson07Styles.css';
import { getSinglePost } from './api.js';
import { useState } from 'react';

export default function FetchOnClick() {
  const [data, setData] = useState({ title: '', body: '' });

  function handleClick(id) {
    const post = getSinglePost(id);
    setData({ title: post.title, body: post.body });
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button
        type="button"
        onClick={() => {
          handleClick(1);
        }}
      >
        Get post
      </button>
      <div className="content">
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
    </div>
  );
}
