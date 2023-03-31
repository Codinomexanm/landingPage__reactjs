import React from 'react';
import PostCard from "../PostCard";

const Posts = ({ posts }) => {
  return (
    <div className='posts'>
      {posts.map(post => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          id={post.id}
          cover={post.cover}
        />
      ))}
    </div>
  );
};

export default Posts;
