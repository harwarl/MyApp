// const express = require("express");
// const bodyparser = require("body-parser");
// PORT = 3000;

// const app = express();

// app.use(bodyparser.urlencoded({extended: false}))

// app.use('/', (req, res, next)=>{
//     res.send("<h1>Hello World</h1>");
// })

// app.listen(PORT, err=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("Server is Up and Running on Port ", PORT);
// })

const http = require("http");
const requestListener = (req, res)=>{
    const responseData = {
        slackUsername: "ErenJs",
        backend: true,
        age: 23,
        bio: "Hello, I am a beginner. I don't know much and I hope to learn through HNG"
    }

    const jsonContent = JSON.stringify(responseData);
    res.write(jsonContent);
    res.end();
}
const httpServer = http.createServer(requestListener);
httpServer.listen(3000);