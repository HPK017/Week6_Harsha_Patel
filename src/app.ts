import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors';
import bookRouters from './routers/bookRoutes'
import userRoutes from './routers/userRoutes';
import authorRoutes from './routers/authorRoutes';
import bookRoutes from './routers/bookRoutes';
import ratingRoutes from './routers/ratingRoutes';

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())

app.use('/', bookRouters)
app.use('/', userRoutes)
app.use('/', authorRoutes)
app.use('/', bookRoutes)
app.use('/', ratingRoutes)

app.listen(3000, ()=> {
    console.log(` Hii we are comfortable in NodeJS `);
})