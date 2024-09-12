const mongoose = require("mongoose");

const cronJobsSchema = new mongoose.Schema({
    jobName: String,
    emailId: String,
    about: String
})

const Jobs = mongoose.model("Jobs", cronJobsSchema)
module.exports = Jobs