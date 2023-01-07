import { getDatabase,set,ref } from 'firebase/database';
import express from 'express'
import  morgan from 'morgan'
import db from './db.js';
const app= express();
app.use(express.json());
app.set(db);
const addData = async (data) => {

    const db = getDatabase();
    await set(ref(db, "logger/" ), {
      data:data
    });
  }

// const logger = morgan('combined')

app.use(morgan((tokens,req,res)=>{
 addData([tokens.method(req,res)])
}))
app.get('/',(req,res)=>{
    res.send("hii")
})
app.listen(8000, ()=>{
 
    console.log('server is running on http://localhost:8000')
  })
  