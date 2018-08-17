const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    income: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
    housing: {
        mortgageRent: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        phone: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        electricity: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        gas: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        waterSewer: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        internet: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        wasteRemoval: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        maintenance: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        supplies: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        other: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } }
    },
    transportation: {
        vehiclePayment: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        busTrainUber: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        insurance: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        licensing: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        fuel: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        maintenance: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        other: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } }
    },
    entertainment: {
        movies: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        music: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        vacation: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        theater: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        sports: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        winterSports: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        other: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } }
    },
    loans: {
        personal: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        student: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        credit: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } },
        other: { projected: { default: 0, type: Number }, actual: { default: 0, type: Number } }
    }
});

module.exports = mongoose.model('budget', categorySchema);








