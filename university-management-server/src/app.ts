import express, { Application, json, urlencoded } from 'express';
import cors from 'cors'
const app:Application = express();
const port = 3000;

app.use(cors())

// parser 
app.use(express.json());
app.use(urlencoded({extended: true}))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
