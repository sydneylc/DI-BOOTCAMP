import React from 'react';
import jsonData from './data.json';

const PostList = () => {
  return (
    <div>
      {jsonData.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;