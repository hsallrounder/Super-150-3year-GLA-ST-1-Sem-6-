const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    Title : {
        type: String,
        required: true,
        maxLength: 25
    },
    Description: {
        type: String,
        required: [true, "You must provide a Description!!"],
    },
    Markdown: {
        type: String,
    }
})

const article = mongoose.model('article',schema);
module.exports = article;