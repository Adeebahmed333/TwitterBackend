import UserService from "../services/user-service.js";
const userService=new UserService();

export const signup=async(req,res)=>{
    try {
        const response=await userService.signup({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        });
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
export const login=async(req,res)=>{
    try {
        const user=await userService.getByEmail(req.body.email);
        if(!user){
            throw "email";
        }
         if(!user.comparePassword(req.body.password)){
            throw "password";
         }
         const token=user.genJWT();
        return res.status(200).json({
            success:true,
            massage:'Successfully Logged In',
            data:token,
            err:{}
        });
    } catch (error) {
        if(error=="email")
        {
            return res.status(401).json({
                success:false,
                massage:'No user with this email exists',
                data:{},
                err:error.message 
            });
        }
        if(error=="password"){
            return res.status(401).json({
                success:false,
                massage:'Incorrect Password',
                data:{},
                err:error.message 
            });
        }
        return res.status(500).json({
            success:false,
            massage:'Something Went Wrong',
            data:{},
            err:error.message 
        });
    }
}
