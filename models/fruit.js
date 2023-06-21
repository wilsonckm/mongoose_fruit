const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fruitSchema = new Schema ({
    name: {type: String, 
        require: true
    },
    color: {type: String,
        enum: ['Red', 'Green', 'Orange', 'Brown', 'Yellow', 'Purple', 'White' ],
        require: true
    },
    ripe: {type: Boolean, 
        default: false,
        require: true
    },
    quantity: {type: Number,
        min: 0,
        required: true,
    }
    }, {
    timestamps:true
});

module.exports= mongoose.model('Fruit', fruitSchema);