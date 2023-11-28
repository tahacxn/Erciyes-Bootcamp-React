import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

function Post() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => setUsers(res.data));
  }, []);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => setPosts(res.data));
  }, []);

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  return (
    <>
      <label htmlFor="users">USERS</label>
      <select name="users" id="users" onChange={handleUserChange} value={selectedUser}>
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      <Container className="mt-4">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>USER ID</th>
              <th>TITLE</th>
              <th>BODY</th>
            </tr>
          </thead>
          <tbody>
            {posts
              .filter((post) => !selectedUser || post.userId.toString() === selectedUser)
              .map((post) => (
                <tr key={post.id}>
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Post;
