const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

mongoose
  .connect(
    'mongodb+srv://danielDev:505050@expense-app.iuwdnmn.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('connected successful');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(4000, () =>
  console.log('server is running at http://localhost:4000')
);
