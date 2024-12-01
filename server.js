const express = require('express');
const connectDB = require('./config/connectDB');
const urlRoute = require('./routes/urlRoutes');

require('dotenv').config();

const app = express();
app.use(express.json());

app.use("/url", urlRoute);

const PORT = process.env.PORT
connectDB().then(()=>{
    app.listen(PORT, () =>{
        console.log("Server Running at the port " + PORT);
    });
});