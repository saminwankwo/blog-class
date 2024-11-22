import express from 'express'
import env from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors())
env.config();

import userRoutes from './src/routes/users.js'
import postRoutes from './src/routes/posts.js'

const SERVER = process.env.PORT
const mongodb = process.env.MONGO_URL

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('connected to db'))
.catch((error) => console.log('connection error ', error))

app.use('/user', userRoutes)
app.use('/post', postRoutes)

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
    if(req.method =="OPTIONS"){
        res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE");
        return res.status(200).json({});
    }
    next();

})

app.listen(SERVER, () => {
    console.log(` starting server at ${SERVER}`);
})