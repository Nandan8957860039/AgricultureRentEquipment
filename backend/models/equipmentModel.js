const { Schema, model } = require('../connection')//model is liye banate hai data store keya jaa sakte

const mySchema = new Schema({
    title: { type: String, required: true },
    brand: { type: String },
    price: String,
    image: { type: String },
    category: { type: String },
    createaAt: { type: Date, Default: Date.now }//
})

module.exports = model('equipment', mySchema);//rest API-representaion API yhe ek backend
//  hota hai formely connect with fronend to backend