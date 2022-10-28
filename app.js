const express = require("express");
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
app.use('/bio', (req, res)=>{
    res.send(JSON.parse(jsonContent).bio);
})

app.use('/age', (req, res)=>{
    res.send(JSON.parse(jsonContent).age.toString());
})

app.use('/backend', (req, res)=>{
    res.send(JSON.parse(jsonContent).backend);
})

app.use('/slackUsername', (req, res)=>{
    res.send(JSON.parse(jsonContent).slackUsername);
})

app.use('/', (req, res, next)=>{
    res.send(jsonContent);
})

app.listen(PORT, err=>{
    if(err){
        console.log(err)
    }
    console.log("Server is Up and Running on Port ", PORT);
})
