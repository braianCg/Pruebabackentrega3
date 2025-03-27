const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce';
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        const conn = await mongoose.connect(mongoURI, options);

        console.log(`MongoDB conectado: ${conn.connection.host}`);

        return conn;
    } catch (error) {
        console.error(`Error al conectar a MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;