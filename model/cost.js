const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const costsSchema = Schema({
    name: {
        enum: ["housing", "transportation", "entertainment", "loans"],
        type: String,
        required: true
    },
    transactionTypes: [
        {
            type: Schema.Types.ObjectId,
            ref: "transaction",
            projectedCost: Number,
            actualCost: Number,
            required: true
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
});

module.exports = mongoose.model('cost', CategorySchema);








