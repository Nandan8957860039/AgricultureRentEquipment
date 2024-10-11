
const { Schema, model } = require('../connection')//model is liye banate hai data store keya jaa sakte

const mySchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: String,
    city:{type:String,default:'unknown'},
    createAt: { type: Date, Default: Date.now }//
})

module.exports = model('user', mySchema);//rest API-representaion API yhe ek backend
//  hota hai formely connect with fronend to backend