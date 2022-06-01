import express from "express";
import { PORT } from "./resources";

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
