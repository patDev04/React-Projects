import './App.scss';
import { useState } from 'react';
import PostList from './component/PostList';
import { postAdded } from './redux/postSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const onSavePost = () => {
    if (title && content) {
      dispatch(postAdded(title, content));
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="App">
      <h1>Blog Post App</h1>
      <div className="todo">
        <form>
          <h5 className="title">Add a new post</h5>
          <input
            type="text"
            name="title"
            placeholder="post title"
            value={title}
            onChange={onTitleChange}
          />
          <input type="text" name="author" placeholder="author" />
          <textarea
            type="text"
            name="content"
            placeholder="content"
            value={content}
            onChange={onContentChange}
          ></textarea>
          <button type="button" onClick={onSavePost}>
            save post
          </button>
        </form>

        <div className="post">
          <h1>Posts</h1>
          <div className="list">
            <PostList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
