import express from 'express';
import {connect} from './config/dbconfig.js';
import { PORT } from './config/serverConfig.js';
import v1ApiRoutes from './routes/index.js';

const app=express();
app.use(express.json());
app.use('/api',v1ApiRoutes);

app.listen(PORT,async()=>{
    console.log(`Server Started At Port: ${PORT}`);
    await connect();
    console.log('Done');
});
