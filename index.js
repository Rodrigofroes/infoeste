import express from 'express';
import cors from 'cors';
import usuarioRoute from './routes/usuario.route.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/usuario', usuarioRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
