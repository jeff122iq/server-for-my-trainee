require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST;
const cors = require('cors');
const router = require('./router');

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Server has been started on ${HOST}:${PORT}`));
