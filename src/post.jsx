export default function Post({ post }) {
  console.log(post);
  return (
    <div className="card">
      <h4>
        name: {post.title}
        <br />
        body: {post.body}
      </h4>
    </div>
  );
}
