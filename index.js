const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const cors = require('cors');

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cors());
app.use('/posts', postsRoutes);

app.listen(5500, () => console.log('Server started: 5500'));