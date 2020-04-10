require('dotenv').config();
const express = require("express");
const app = express();
const massive = require("massive");
const {getHouses, addHouse, removeHouse} = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
        app.set("db", db)
      })
      .catch(err => console.log(err));


app.get('/api/houses', getHouses);
app.post('/api/houses', addHouse);
app.delete('/apihouses/:id', removeHouse);

app.listen(SERVER_PORT, () => {console.log(`Running on PORT${SERVER_PORT}.`)});