const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Jobs = require("./model/CronJobs");
const nodemailer = require('nodemailer')
const port = process.env.PORT || 3000;

app.use(express.json());
const url = `mongodb+srv://cronfsapp:${process.env.dbpass}@cluster0.cixehwo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

async function connect() {
    try {
        await mongoose.connect(url);
        console.log("Connected to mongodb");
    } catch (error) {
        console.log(error);
    }
}

app.listen(port, () => {
    console.log(`Server is running on port ${port} and the cron job is running every min`);
    connect();
})

app.get('/all',(req,res)=>{
    Jobs.find({})
    .then((data)=>{
        res.status(200).send(data)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
})

app.post('/add',(req,res)=>{
    const {jobName,emailId,about} = req.body  
    const job = new Jobs({jobName,emailId,about})
    job.save()
    .then((data)=>{
        res.status(200).send(data)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
})

require("./scheduler")