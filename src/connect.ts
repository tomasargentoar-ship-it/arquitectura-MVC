import mongoose from "mongoose";

mongoose.connect(process.env.URI_DB || "mongodb://localhost:27017/diccionario")

export const connectDB = async () => {
try {
    process.loadEnvFile()
    await mongoose.connect(process.env.URI_DB || "mongodb://localhost:27017/diccionario")
    console.log("Connected to the database");
}
catch (error){
    console.error("Error connecting to the database:",error);
}
}