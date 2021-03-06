/*eslint-disable no-console */
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3001;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.use(express.static(path.join(__dirname, '../public')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
