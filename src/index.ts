import express from 'express';
import axios from 'axios';

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('hey');
});

app.get('/users', async (req, res) => {
  let users;
  try {
    users = await axios.get('https://jsonplaceholder.typicode.com/users');
  } catch (err) {
    console.info(err);
  }
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Server listening at: http://localhost:${PORT}`);
});
