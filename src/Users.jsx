import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUSers] = useState([]);

  useEffect(() => {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUSers(data))
  }, []);

  return <div>
    <h3>Users: {users.length}</h3>
  </div>;
}
