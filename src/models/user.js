import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { SALT } from '../config/serverConfig.js';
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
})

const User=model('User',userSchema);
export default User;