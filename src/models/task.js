const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('tasks', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        required: true
    }
})

module.exports = Task