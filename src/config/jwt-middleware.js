import  JWT from 'passport-jwt';
import {JWT_SECRET} from './serverConfig.js';
import User from '../models/user.js';
const JwtStrategy=JWT.Strategy;
const ExtractJwt=JWT.ExtractJwt;

const opts={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:JWT_SECRET,
}

export const passportAuth=(passport)=>{
 passport.use(new JwtStrategy(opts, async function(jwt_payload,done){
  const user=await User.findById(jwt_payload.id);
  if(user){
    return done(null,user);
  }
  else{
    return done(null,false);
  }
 }));
}