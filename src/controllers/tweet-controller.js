import TweetService from '../services/tweet-service.js';

const tweetService=new TweetService();

export const createTweet=async(req,res)=>{
try {
    const response=await tweetService.create(req.body);
    return res.status(201).json({
        success:true,
        massage:'Successfully Created A New Tweet',
        data:response,
        err:{}
    });
} catch (error) {
    return res.status(500).json({
        success:false,
        massage:'Something Went Wrong',
        data:{},
        err:error.message 
    });
}
}

export const getTweet=async(req,res)=>{
    try {
        const response=await tweetService.get(req.params.id);
        return res.status(200).json({
            success:true,
            massage:'Successfully Fetched the Tweet',
            data:response,
            err:{}
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            massage:'Something Went Wrong',
            data:{},
            err:error.message 
        });
    }
}