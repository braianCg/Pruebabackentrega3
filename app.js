const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const connectDB = require('./src/config/db');
require('dotenv').config();

const productRoutes = require('./src/routes/productRouter');
const cartRoutes = require('./src/routes/cartRouter');
const viewRoutes = require('./src/routes/viewRouter');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

app.engine(
    'handlebars',
    engine({
        extname: 'handlebars',
        defaultLayout: 'main',
        layoutsDir: path.join(__dirname, 'src/views/layouts'),
        partialsDir: path.join(__dirname, 'src/views/partials'),
    })
);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'src/views'));

app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/', viewRoutes);

app.use(errorHandler);

const startServer = async () => {
    try {
        await connectDB(); // Conexión a la base de datos
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar la aplicación:', error);
    }
};

startServer(); // Inicia el servidor