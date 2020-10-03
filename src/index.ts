import express from 'express';
import axios from 'axios';

const PORT = 3000;

const app = express();

app.get('/', async (req, res) => {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    res.send(users);
});

app.listen(PORT, () => {
    console.log(`Server listening at: http://localhost:${PORT}`);
});
