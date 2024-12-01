const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    originalUrl: { 
        type: String, 
        required: true 
    },
    shortCode: { 
        type: String, 
        required: true, 
        unique: true 
    },
    clickCount: { 
        type: Number, 
        default: 0 
    },
    expiresAt: { 
        type: Date, 
        required: true 
    }, 
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
});

module.exports = mongoose.model('URL', urlSchema);
