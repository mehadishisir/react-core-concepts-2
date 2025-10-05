import { use } from "react";

export default function Friends({ friendsPromise }) {
  const friends = use(friendsPromise);
  //   console.log(friends);
  return (
    <div>
      <h2>Friends Component</h2>
      <p>This is a simple Friends component.</p>
      <p>Friends:{friends.length}</p>
    </div>
  );
}
