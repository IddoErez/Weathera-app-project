const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const citySchema = new Schema({
    name: String,
    temperature: Number,
    condition: String,
    conditionPic: String
  
})
const Cities = mongoose.model("city", citySchema)
module.exports = Cities 