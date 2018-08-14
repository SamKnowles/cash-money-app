const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    income: {projected: Number, actual: Number},
    housing: {
        mortgageRent: {projected: Number, actual: {default: 0, type: Number}},
        phone: {projected: Number, actual: {default: 0, type: Number}},
        electricity: {projected: Number, actual: {default: 0, type: Number}},
        gas: {projected: Number, actual: {default: 0, type: Number}},
        waterSewer: {projected: Number, actual: {default: 0, type: Number}},
        internet: {projected: Number, actual: {default: 0, type: Number}},
        wasteRemoval: {projected: Number, actual: {default: 0, type: Number}},
        maintenance: {projected: Number, actual: {default: 0, type: Number}},
        supplies: {projected: Number, actual: {default: 0, type: Number}},
        other: {projected: Number, actual: {default: 0, type: Number}}
    },
    transportation: {
        vehiclePayment: {projected: Number, actual: {default: 0, type: Number}},
        busTrainUber: {projected: Number, actual: {default: 0, type: Number}},
        insurance: {projected: Number, actual: {default: 0, type: Number}},
        licensing: {projected: Number, actual: {default: 0, type: Number}},
        fuel: {projected: Number, actual: {default: 0, type: Number}},
        maintenance: {projected: Number, actual: {default: 0, type: Number}},
        other: {projected: Number, actual: {default: 0, type: Number}}
    },
    entertainment: {
        movies: {projected: Number, actual: {default: 0, type: Number}},
        music: {projected: Number, actual: {default: 0, type: Number}},
        vacation: {projected: Number, actual: {default: 0, type: Number}},
        theater: {projected: Number, actual: {default: 0, type: Number}},
        sports: {projected: Number, actual: {default: 0, type: Number}},
        winterSports: {projected: Number, actual: {default: 0, type: Number}},
        other: {projected: Number, actual: {default: 0, type: Number}}
    },
    loans: {
        personal: {projected: Number, actual: {default: 0, type: Number}},
        student: {projected: Number, actual: {default: 0, type: Number}},
        credit: {projected: Number, actual: {default: 0, type: Number}},
        other: {projected: Number, actual: {default: 0, type: Number}}
    }
});

module.exports = mongoose.model('budget', categorySchema);








