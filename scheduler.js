const cron = require('node-cron');

cron.schedule('*/3 * * * * *', () => {
    // runs every min 
    console.log('running a task every minute');
})