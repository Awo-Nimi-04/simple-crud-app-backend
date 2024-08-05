const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route.js')
const app = express()


//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.use("/api/products", productRoute)





app.get('/', (req, res) => {
    res.send("Hello from Node API Server")
})

mongoose.connect("mongodb+srv://admin:kobbie_mainoo@backenddb.1h1djit.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to the database!")
        app.get('/', (req, res) => {
            res.send("Hello from Node API Server")
        })
    })
    .catch(() => {
        console.log("Connection failed!")
    })

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

