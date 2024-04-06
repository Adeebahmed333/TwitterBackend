import Hashtag from "../models/hashtag.js";

class HashtagRepository {
  async create(data) {
    try {
      const hashtag  = await Hashtag.create(data);
      return hashtag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async bulkCreate(data){
    try {
        const hashtags=await Hashtag.insertMany(data);
        return hashtags;
    } catch (error) {
        console.log(error);
        throw error;
    }
  }
  async get(id) {
    try {
      const hashtag = await Hashtag.findById(id);
      return hashtag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAll(offset, limit) {
    try {
      const hashtag = await Hashtag.find().skip(offset).limit(limit);
      return hashtag;
    } catch (error) {
      console.log(error);
    }
  }

  async destroy(id) {
    try {
      const response=await Hashtag.findByIdAndDelete(id);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getByName(titleList){
    try {
      const hashtags=Hashtag.find({
       title:titleList
      });
      return hashtags
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
export default HashtagRepository;
