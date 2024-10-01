import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(
             `mongodb+srv://${process.env.DB_USER}:212777550@cluster0.pvlc3.mongodb.net/Locadora`
          );

    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);

    }
};

connectDB();

export default mongoose;