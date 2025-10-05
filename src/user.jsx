import { use } from "react";

export default function Users({ fetchUser }) {
  const users = use(fetchUser);
  console.log(users);
  return (
    <div className="card">
      <h2>User Component</h2>
      <p>user:{users.length}</p>
    </div>
  );
}
