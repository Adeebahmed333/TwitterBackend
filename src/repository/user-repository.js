import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }
    async getByEmail(userEmail) {
        try {
          const user = await User.findOne({ email: userEmail });
          return user;
        } catch (error) {
          console.log("Something Went Wrong In Repo Layer");
          console.log(error);
         throw error;
        }
      }
}

export default UserRepository;