import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import router from "./routes/users.js";

const app =express();
const port=5000;

app.use(bodyParser.json());
app.use(cors());


app.use("/",router);

app.get("/",(req,res)=>res.send("hello from express"));
app.all("*",(req,res)=>res.send('that router doesn"t exist'))


app.listen(port,()=>
console.log(`Server is listening on port: http://localhost:${port}`)
);
