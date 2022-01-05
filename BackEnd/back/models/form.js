const mongoose = require("mongoose")

const FormSchema = new mongoose.Schema({
    fid:{
        type: String,
        required: [true, 'Please Add a Title'],
        unique: true,
        trim: true
    },
    fullName:{
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        maxlength:[40,'Name should be less than 40 characters']
    },
    branch:String,
    college: String,
    phone: String,
    date: String,
    eventName: String,
    eventID: String,
})

module.exports = mongoose.model.Form || mongoose.model('Form', FormSchema)
//^if this model already exists then use that ^else use this to create one