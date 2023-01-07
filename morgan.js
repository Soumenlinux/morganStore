import { getDatabase,set,ref } from 'firebase/database';
import express from 'express'
import  morgan from 'morgan'
import db from './db.js';
const app= express();
app.use(express.json());
app.set(db);
const addData = async (data,userId) => {

    const db = getDatabase();
    await set(ref(db, "logger/" +userId), {
        
      data:data
    });
  }

// const logger = morgan('combined')
app.use(morgan((tokens,req,res)=>{
    addData([tokens.url(req,res)],Date.now())
   }))

app.get('/',(req,res)=>{
    res.send("hii")
})

app.get('/add',(req,res)=>{
    res.send("hii add")
})

app.listen(8000, ()=>{
 
    console.log('server is running on http://localhost:8000')
  })
  