import mongoose from "mongoose";

// Substitua USER, PASSWORD e DB_NAME pelos seus dados
const USER = "monteiroigor2021_db_user";
const PASSWORD = "7VFQsQs1yQcLhoO8";
const DB_NAME = "weatherApp"; // pode criar um nome qualquer para o banco

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@cluster0.yo7ibxd.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

export async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB Atlas conectado com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar no MongoDB Atlas:", error);
        process.exit(1);
    }
}
