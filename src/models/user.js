import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SALT,JWT_SECRET } from '../config/serverConfig.js';
const userSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},{timestamps:true});

userSchema.pre('save',function(next){
    if (!this.isModified('password')) {
        return next();
      }
      this.password = bcrypt.hashSync(this.password, SALT);
      next();
});

userSchema.methods.comparePassword = function compare(password){
    try {
        const response= bcrypt.compareSync(password, this.password);
        return response;
}
    catch (error) {
        console.log(error);
        throw error;
    }

}
userSchema.methods.genJWT = function generate(){
   return jwt.sign({
    id:this._id,
    email:this.email
},JWT_SECRET,{
    expiresIn:'1h'
});
}

const User=model('User',userSchema);
export default User;