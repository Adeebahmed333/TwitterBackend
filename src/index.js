const express=require('express');
const conn= require('./config/dbconfig');
const Comment=require('./models/comment');
const tweetRepository=require('./repository/tweet-repository');
const app=express();

app.listen(3000,async()=>{
    console.log(`Server Started At Port: 3000`);
    await conn();
    console.log('Done');
    // const Tweet= await tweet.create({//to create tweets
    //     content:'Third tweet',
    //     userEmail:'ad@gmail.com'
    // });
    // console.log(Tweet);
   // const Tweets=await tweet.find();//to get all the tweets
    //const TweetsByMail=await tweet.find({userEmail:'ad@gmail.com'});//to get  the tweets by email
    //console.log(TweetsByMail);
    // const tweetById=await tweet.findById('660694411021633ec376cc88')//to find tweet by id
    // tweetById.userEmail='adeebahmed3337@gmail.com';//updating the email of tweet
    // await tweetById.save();//to save the tweet
    // console.log(tweetById);
    const tweetRepo=new tweetRepository();
    //  const tweet=await tweetRepo.update('66069ce55160f3da469190af',{
    //     userEmail:'adeebahmed337@gmail.com'
    //  });
    // const tweet=await tweetRepo.create({
    //     content:'absdfc',
    //     userEmail:"aksbdfuaub",
    // });
    //  console.log(tweet);
    //  const comment=await Comment.create({
    //     content:'acfbukae'
    //  });
    //  tweet.comments.push(comment);
    //  await tweet.save();
    //  console.log(tweet);

    // const tweet=await tweetRepo.getWithComments('6606a42512f9d2457a24e4e3');
    // console.log(tweet);
});
