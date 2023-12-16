import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const MONGODB_URL= 'mongodb+srv://zeus:Olympus0115@cluster0.y6btrdb.mongodb.net'
        await mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB !!');
    } catch (error) {
        console.log("Failed to connect to database: ", error)
    }
}

export default connectDB