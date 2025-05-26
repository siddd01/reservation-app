// mongo db connection

import mongoose from "mongoose";

export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URI,{
         dbName:"RESTAURANT"
    })
    .then(()=>{
        console.log("db connected Successfully")
    })
    .catch(()=>{
        console.log("db connection failed")
    })

}

