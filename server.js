const express = require('express')
const fs = require('fs')
const path = require('path')
//创建服务器
const app = express()
const cors = require('cors')
app.use(cors())
app.get('/home', (req, res) => {

    fs.readFile(path.join(__dirname,'./dataJson/home.json'), (err, data) => {
        res.send(JSON.parse(data))
    })
})
app.get('/city', (req, res) => {

    fs.readFile(path.join(__dirname,'./dataJson/city.json'), (err, data) => {
        res.send(JSON.parse(data))
    })
})

//启动服务器
app.listen(5050, () => {
    console.log('http://127.0.0.1:5050');

})