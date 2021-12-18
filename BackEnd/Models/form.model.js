
import mongoose from "mongoose"

const Schema = mongoose.Schema

const formSchemas = new Schema({
    fid: String,
    fullName: String,
    branch: String,
    semester: String,
    college: String,
    phone: String,
    date: String,
    eventName: String,
    eventID: String,
})

export default mongoose.model("form", formSchemas)

