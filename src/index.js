const express=require('express');
const conn= require('./config/dbconfig');
const {PORT}=require('./config/serverConfig');
const TweetService=require('./services/tweet-service');
const app=express();

app.listen(PORT,async()=>{
    console.log(`Server Started At Port: ${PORT}`);
    await conn();
    const service=new TweetService();
    // const tweet=service.create({
    //     content:'i love #we #are #venom #bad'
    // });
    console.log('Done');
});
