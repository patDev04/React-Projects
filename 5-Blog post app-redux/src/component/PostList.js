import { useSelector } from 'react-redux';
import { selectAllPosts } from '../redux/postSlice';
import './postlist.scss';

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  return (
    <div>
      {posts.map((post) => (
        <article>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
};

export default PostList;
