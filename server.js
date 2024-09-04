const express = require("express");
const dotenv  = require("dotenv");
const morgan = require('morgan')

const logger = require("./middleware/logger")
dotenv.config({path:"./config/config.env"});


const connectDB = require('./config/db')
const bootcamp = require('./routes/bootcamp')

//Connect to DB
connectDB();





const app = express();




if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
}


app.use('/api/v1/bootcamps',bootcamp)



// app.get('/',(req,res)=>{
//     res.json('<h3>Hello ashish</h3>')

// })




let PORT= process.env.PORT;
let MODE = process.env.NODE_ENV 

const server = app.listen(PORT, ()=>console.log(`Server is up and running in ${process.env.NODE_ENV} environment with port ${PORT}`) )


process.on('unHandleRejection',(err,promise)=>{
    console.log(`Error: ${err.message}`);
    server.close(()=>process.exit(1))
})