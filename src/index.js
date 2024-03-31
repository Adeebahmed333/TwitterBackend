const express=require('express');
const conn= require('./config/dbconfig');
const {PORT}=require('./config/serverConfig')
const app=express();

app.listen(PORT,async()=>{
    console.log(`Server Started At Port: ${PORT}`);
    await conn();
    console.log('Done');
});
