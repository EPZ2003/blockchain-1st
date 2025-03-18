import express from 'express'
import bodyParser from 'body-parser'
import { Request,Response } from 'express';
import router from './routes';
const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express()
app.use(bodyParser.json());

app.get('/',(req:Request,res:Response)=>{
    res.send("OK")
})

app.get('/api',router,(req:Request,res:Response)=>{
    res.send("OK")
})

app.listen(HTTP_PORT,()=>{
    console.log(`listening on port ${HTTP_PORT}`);
    console.log(`localhost:${HTTP_PORT}/`);
})