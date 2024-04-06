import { Schema, model } from 'mongoose';

const tweetSchema=new Schema({
    content:{
        type:String,
        required:true,
        max:[250,'Tweet Can\'t be more than 250 characters']
    },
    hashtags:[
        {
            type:Schema.Types.ObjectId,
            ref:'Hashtag'
        }
    ]
},{timestamps:true});

const Tweet=model('Tweet',tweetSchema);
export default Tweet;