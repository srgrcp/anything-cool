import { Schema, model } from 'mongoose'
import cryptoRandomString from 'crypto-random-string'
import mongoosePaginate from 'mongoose-paginate-v2'

const ObjectId = Schema.Types.ObjectId

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, requiredPaths: true },
    sessions: [{ type: String, ref: 'Token'}]
})

const tokenSchema = new Schema({
    _id: { type: String, default: newToken },
    user: { type: ObjectId, required: true, ref: 'User' }
})

function newToken() {
    return cryptoRandomString({ length: 20, type: 'distinguishable' })
}

userSchema.plugin(mongoosePaginate)
tokenSchema.plugin(mongoosePaginate)

export const User = model('User', userSchema)
