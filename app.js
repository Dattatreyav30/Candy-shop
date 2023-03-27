const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const app = express();

const sequelize = require('./util/database')


const cors = require('cors');   

const indexRoutes = require('./routes/indexRoutes');

sequelize.sync().then((result) => {
    // console.log(result);
}).catch((err) => {
    console.error(err); 
})

app.use(cors());

app.use(bodyParser.json({ extended: false }));

app.use(indexRoutes);

app.listen(3000);

