const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.methods.withoutPassword = function() {
    let user = this.toObject();
    delete user.password;
    return user;
}

module.exports = mongoose.model('User', userSchema);