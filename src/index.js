import express from 'express';
import {connect} from './config/dbconfig.js';
import { PORT } from './config/serverConfig.js';
import TweetService from './services/tweet-service.js';
const app=express();

app.listen(PORT,async()=>{
    console.log(`Server Started At Port: ${PORT}`);
    await connect();
   const service=new TweetService();
    // const tweet=service.create({
    //     content:' #sad #sleeping'
    // });
    console.log('Done');
});
