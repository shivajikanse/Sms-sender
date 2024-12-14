import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import Nexmo from "@vonage/server-sdk";
import path from "path";

//import socket from "socket.io";


const app = express();
const port = 3000;
const __dirname = path.resolve();

app.set('view engine', 'html');
app.engine('html',ejs.renderFile);

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public"))); // Correctly reference the public folder


//index routes
app.get('/',(req, res)=>{
    res.render("index");
});

app.post('/',(req,res)=>{
    res.send(req.body);
    console.log(req.body);
    
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
