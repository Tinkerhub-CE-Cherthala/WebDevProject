
import mongoose from "mongoose"

const Schema = mongoose.Schema

const formSchemas = new Schema({
    fullName: String,
    branch: String,
    semester: String,
    college: String,
    phone: String,
    date: String,
    eventName: String,
    note: String,
})

export default mongoose.model("form", formSchemas)

