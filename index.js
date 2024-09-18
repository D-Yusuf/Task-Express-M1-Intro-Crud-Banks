const express = require("express")
const accountsRouter = require("./apis/accounts/accounts.routes") 
const connectDB = require("./apis/accounts/database")
const app = express()
require('dotenv').config()
app.use(express.json())
app.use(accountsRouter);
const PORT = process.env.PORT
connectDB()
app.listen(PORT, ()=>{
    console.log("welcome")
})