import TweetService from "../services/tweet-service.js";
import upload from "../config/fileUploadS3Config.js";
const singleUploader=upload.single('image');



const tweetService = new TweetService();

export const createTweet = async (req, res) => {
  try {
    singleUploader(req, res, async function(err,data){
      if(err){
        return res.status(500).json({
          success: false,
          massage: "Something Went Wrong",
          data: {},
          error: err,
        });
      }
      //console.log(`Image URL is `,req.file);
      const d=req.body;
      d.images=req.file.location;
         const response = await tweetService.create(d);
    return res.status(201).json({
      success: true,
      massage: "Successfully Created A New Tweet",
      data: response,
      err: {},
    });
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      massage: "Something Went Wrong",
      data: {},
      err: error.message,
    });
  }
};

export const getTweet = async (req, res) => {
  try {
    const response = await tweetService.get(req.params.id);
    return res.status(200).json({
      success: true,
      massage: "Successfully Fetched the Tweet",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      massage: "Something Went Wrong",
      data: {},
      err: error.message,
    });
  }
};
