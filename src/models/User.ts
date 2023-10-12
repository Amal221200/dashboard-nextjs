import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    name: {
        type: String,
    },
    image: {
        type: String
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum:['admin', 'user'],
        default: 'user'
    }
})

const User = models.User || model("User", UserSchema)

export default User