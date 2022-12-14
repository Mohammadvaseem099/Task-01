const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const studentSchema = new mongoose.Schema({


    name: {
        type: String,
        required: true,
        trim: true
    },

    subject: {
        type: String,
        required: true,
        trim: true
    },

    marks: {
        type: Number,
        required: true,
        trim: true
    }, 

    userId: {
        type: ObjectId,
        ref: 'teacher',
        required: true,
        unique: true
        
    },

    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    }

    
}, { timestamps: true })

module.exports = mongoose.model('student', studentSchema)
