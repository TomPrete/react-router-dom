import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const [post, setPost] = useState(null)
  let params = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data)
      })
  }, [])

  console.log(params)
  return (
    <div>
      <h1>Post Component</h1>
      { post && <div><h3>{ post.title }</h3><p>{ post.body }</p></div>}

    </div>
  );
};

export default Post;
