'use strict';

const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('./public'));

app.get('/hello', (request, response) => response.send('Hi Roz, thanks for the cookies. Hi James - Happy Birthday'));

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));