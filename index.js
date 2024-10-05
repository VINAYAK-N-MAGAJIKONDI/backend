const express = require('express')
const app = express()
require('dotenv').config()
console.log(process.env)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter" , (req, res) =>{
    res.send("twitter twitterr")

} )

app.get("/login" , (req, res) => {
    res.send("<h1> heyyy  you </h1>")
})

app.get("/UVCE" , (req, res)=> {
    res.send("<h2> UVCE </h2>")
})


app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})