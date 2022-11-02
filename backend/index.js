import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

await mongoose.connect(
  'mongodb+srv://danielDev:505050@expense-app.iuwdnmn.mongodb.net/?retryWrites=true&w=majority'
);

console.log(`connected: successfully`);

const Port = process.env.PORT || 5000;
app.listen(Port, () => {
  console.log(
    `these application is serve at localhost http://localhost:${Port}`
  );
});
