const { Schema, default: mongoose } = require("mongoose");

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technologies: {
        type: String,
        required: true
    }
})


const projies = mongoose.model('Projects', projectSchema)
module.exports = projies;