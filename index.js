import express from 'express';
import cors from 'cors';
import usuarioRoute from './routes/usuario.route.js';
import produtoRoute from './routes/produto.route.js';
import swaggerUi from 'swagger-ui-express'
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const outputJson = require("./swagger-output.json");

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson));

//rotas
app.use('/usuario', usuarioRoute);
app.use('./produto', produtoRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
