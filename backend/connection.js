// const mongoose = require('mongoose')
const mongoose = require('mongoose')
const url = "mongodb+srv://sanatanbajpai:Sanatan123@cluster0.ee3dh.mongodb.net/agricultureequipments?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
    .then((result) => {
        console.log('connected to mongodb')
    }).catch((err) => {
        console.log(err)
    })
module.exports = mongoose;