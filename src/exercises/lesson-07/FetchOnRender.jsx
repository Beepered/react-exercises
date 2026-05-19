import './Lesson07Styles.css';
import { getPosts } from './api.js';

export default function FetchOnRender() {
  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        <h2>title</h2>
        <p>body</p>
      </div>
    </div>
  );
}
