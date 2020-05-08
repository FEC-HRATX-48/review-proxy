const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = 9000;
const bodyParser = require('body-parser');

app.use(cors());
app.use (bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'))


app.listen(PORT, () => {
  console.log(`WE LIVE BABY, ON PORT: ${PORT}`)
})