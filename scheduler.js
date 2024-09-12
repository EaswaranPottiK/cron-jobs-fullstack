const cron = require('node-cron');
const Jobs = require('./model/CronJobs');
const nodemailer = require('nodemailer')
const {MailtrapClient} = require('mailtrap');

const client = new MailtrapClient({ token: `${process.env.mailTrapToken}` });

cron.schedule('*/10 * * * * *', () => {
    // runs every min - removed /3 on final commit 
    Jobs.findOneAndDelete({}).then(async (data) => {
        if (data == null) {
            console.log("No data found")
        }
        else{
            await client
            .send({
                from: {email: 'info@demomailtrap.com'},
                to: [{ email: data?.emailId }],
                subject: "Hello from Mailtrap!",
                text: `Hello this mail is sent regarding job name - ${data?.jobName}. Details of the job are - ${data?.about}`,
            })
            .then(console.log)
            .catch(console.error);
        }
    }).catch((err) => { console.log(err) })
})