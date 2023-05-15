import express from "express";
import { PORT, log } from "./resources";

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  log(`Server started on port ${PORT}`);
});
