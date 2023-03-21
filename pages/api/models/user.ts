import mongoose from'mongoose';


const UserSchema = new mongoose.Schema({
    email: {
        type: 'String',
        require: true,
        min: 6,
        max: 255,
    },
    password: {
        type: 'String',
        require: true,
        max: 1024,
        min: 6,
    }
})


export default mongoose.model('User', UserSchema)