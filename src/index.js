import express from 'express';
import {connect} from './config/dbconfig.js';
import { PORT } from './config/serverConfig.js';
import v1ApiRoutes from './routes/index.js';
import {UserRepository,TweetRepository} from "./repository/index.js";
import LikeService from "./services/like-service.js";
const app=express();
app.use(express.json());
app.use('/api',v1ApiRoutes);

app.listen(PORT,async()=>{
    console.log(`Server Started At Port: ${PORT}`);
    await connect();
    console.log('Done');
    const userRepository=new UserRepository();
    const tweetRepository=new TweetRepository();
    const tweets= await tweetRepository.getAll(0,3);
    const user=await userRepository.getAll();
    const likeService = new LikeService();
    await likeService.toggleLike(tweets[0].id,'Tweet',user[0].id)
    // console.log(user);
});
