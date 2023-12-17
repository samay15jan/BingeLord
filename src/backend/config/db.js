import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/BingeLord`);
        console.log('Connected to MongoDB !!');
    } catch (error) {
        console.log("Failed to connect to database: ", error)
	console.error(error.stack);
    }
}

export default connectDB
