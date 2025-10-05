import { use } from "react";
import Post from "./post";
export function Posts({ postsPromise }) {
  const posts = use(postsPromise);

  return (
    <div className="card">
      <h2>Post Component</h2>
      <p>This is a simple Post component.</p>
      <p>posts:{posts.length}</p>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
}
