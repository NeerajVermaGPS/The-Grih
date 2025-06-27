const express = require('express');
const routers = require('./routes/indexRoutes');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const { connectToMongoDB } = require('./config/db');
require("./config/dotenvconfig")

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const FRONT_END_ORIGIN = process.env.FRONT_END_ORIGIN;

connectToMongoDB(MONGODB_URI);
app.use(cors({ origin: FRONT_END_ORIGIN }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routers);

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
    });