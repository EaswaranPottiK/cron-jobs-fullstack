﻿# cron-jobs-fullstack
Hi all welcome to my crone full stack application 

# Tech stack 
front end: React JS
Backend: Node/ Express JS
Database: Mongo DB

# How does the app work ?
You can add details of the email to be sent by typeing Job name, a vaild email id, Discription of the job 
![1](https://github.com/user-attachments/assets/256f2f84-5ee5-4ae2-bfbb-805263a1b54e)

Once these details are they are sent to mongodb via backend api call 
The frontend refersh every 5 sec, so the frontend automatically pick up the newly added item 

At the same time backend picks up each task based on a first in first out queue manner from mongo DB. Now a mail is set to recipient via nodemailer library 
![image](https://github.com/user-attachments/assets/730afa2f-a67b-469a-ba5e-089e763c3364)
![image](https://github.com/user-attachments/assets/52ce055b-a765-4365-98ae-6205cd50bf27)

The backend email sent job execute every 10 sec. So once these jobs these items are removed form mongodb as well so the changes whould get reflected in fronend
![2](https://github.com/user-attachments/assets/25c170d0-83b8-4c8b-ab41-5f89b77df28e)
![1](https://github.com/user-attachments/assets/8d7fc2f9-2e2c-48f1-bb35-37067247442c)

