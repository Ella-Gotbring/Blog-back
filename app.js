
const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res) => {
    res.render("index")
})

app.get('/reg', (req,res) => {
    res.render("reg")
})

app.listen(8080, () => console.log("started node server"))