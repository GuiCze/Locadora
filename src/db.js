import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(
             `mongodb+srv://<USER>:<PASSWORD>@cluster0.pvlc3.mongodb.net/Locadora`
          );

    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);

    }
};

connectDB();

export default mongoose;
