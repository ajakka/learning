var mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);

var promotionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true,
        default: "" 
    },
    price: {
        type: mongoose.Types.Currency,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


var promotions = mongoose.model('Promotion', promotionSchema);

module.exports = promotions;