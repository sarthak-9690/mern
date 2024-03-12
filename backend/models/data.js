const mongoose = require('mongoose')
const { Schema } = mongoose;

const schoolSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    rating: {
        type: String,
        require: true
    },
    fees: {
        type: String,
        require: true
    },
    transportation: {
        type: String,
        require: true
    },
    securityService: {
        type: String,
        require: true
    },
    imgLink: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    address: {
        type: Array,
        require: true
    }
})
module.exports = mongoose.model('school', schoolSchema)