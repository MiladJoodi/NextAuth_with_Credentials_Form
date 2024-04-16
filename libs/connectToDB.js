const mongoose = require("mongoose");

const connectToDB = async ()=>{
    try {
        if (mongoose.connections[0].readyState){
            return false;
        }
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected!")
    } catch (err){
        console.log("Error => ", err);
    }
}

export default connectToDB;