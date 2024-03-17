const express = require('express');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;
const app = express();

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  let dbInfo = 'This is the list of our students\n';
  countStudents(process.argv[2])
    .then((msg) => {
      dbInfo += msg;
      res.send(dbInfo);
    })
    .catch((err) => {
      dbInfo += err.message;
      res.send(dbInfo);
    });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
