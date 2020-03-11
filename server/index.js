const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'media'
});

connection.connect(err => {
  if (err) {
    return res.send(err);
  }
});

app.get('/', (req, res) => {
  res.send('this works')
});

app.get('/media', (req, res) => {
  connection.query(`SELECT * FROM media`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

app.listen(4001, () => {
  console.log('media server listening on 4001');
})