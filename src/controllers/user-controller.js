import UserService from "../services/user-service.js";
const userService=new UserService();

export const signup=async(req,res)=>{
    try {
        const response=await userService.signup(req.body);
        return res.status(201).json({
            success:true,
            massage:'Successfully Created A New User',
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
