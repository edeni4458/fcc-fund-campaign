const PORT = 8000
const express = require("express")
const cors = require("cors")
const axios = require("axios")
require('dotenv').config()

const app = express()

app.use(cors())

// app.use((req, res, next) => {
//     res.setHeader(
//       'Content-Security-Policy',
//       "default-src 'self'; connect-src 'self' http://localhost:8000"
//     );
//     next();
//   });

app.get("/history", (req,res)=>{
    fetch(` https://api.emailjs.com/api/v1.1/history?user_id=wKhF1Jo161NykecSP&accessToken=${process.env.API_KEY}&page=1&count=50`)
    .then(res => res.json())
    .then(data=>{
        if(data){
            res.json(data)

        }

        else{
            res.json({error: data})
            console.log("something went wrong")
        }
     

    })
})

app.listen(PORT,()=>{
    console.log("server on")

})