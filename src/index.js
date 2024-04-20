import express from 'express';
import {connect} from './config/dbconfig.js';
import { PORT } from './config/serverConfig.js';
import v1ApiRoutes from './routes/index.js';
import passport from 'passport';
import {passportAuth} from './config/jwt-middleware.js';
const app=express();
app.use(express.json());
app.use('/api',v1ApiRoutes);
app.use(passport.initialize());
passportAuth(passport);
app.listen(PORT,async()=>{
    console.log(`Server Started At Port: ${PORT}`);
    await connect();
    console.log('Done');
});
