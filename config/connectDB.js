const mongoose = require('mongoose');

async function connectDB(){

    try {
        await mongoose.connect(process.env.MONGO_URI);
        const connection = mongoose.connection

        connection.on('connected', () =>{
            console.log("DB Connected");
        })

        connection.on('error',(erro) =>{
            console.log('Error Connecting DB');
        })
        
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB