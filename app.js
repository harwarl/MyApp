const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const PORT = process.env.PORT || 3000;

const app = express();
const responseData = {
    slackUsername: "ErenJs",
    backend: true,
    age: 23,
    bio: "Hello, I am a beginner. I don't know much and I hope to learn through HNG"
}

const jsonContent = JSON.stringify(responseData);

app.use(bodyparser.urlencoded({extended: false}))
app.use(cors());
app.get('/task-done', cors(), (req, res, next)=>{
    res.send(jsonContent);
})

app.listen(PORT, err=>{
    if(err){
        console.log(err)
    }
    console.log("Server is Up and Running on Port ", PORT);
})
