import mongoose from "mongoose";

const connectDB = async () => {
    const mongo_url = "mongodb+srv://abhinavakula4433:%40Bhi4433@abhi0.b1lcky9.mongodb.net/chatApp"
    await mongoose.connect(mongo_url).then(() => {
        console.log('Database connected');
    }).catch((error)=>{
        console.log(error);
    })
};
export default connectDB;