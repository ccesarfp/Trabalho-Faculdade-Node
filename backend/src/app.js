import express from 'express';
import corsMiddleware from "./middlewares/corsMiddleware.js";
import i18nMiddleware from "./middlewares/i18nMiddleware.js";
import routes from './routes/index.js';

const app = express();

console.log(`Setting middlewares`);
app.use(corsMiddleware);
app.use(i18nMiddleware);
app.use(express.json());

console.log(`Setting routes`);
app.use("/api", routes);

export default app;