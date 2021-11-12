///1. requiring
const fs = require("fs");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

//2. turning raw data into readable form
//fs.readFileSync is built in feature that reads and returns file content
let rawdata = fs.readFileSync("./pokedex.json");
//parsing / transforming the data into readable and accessible format
let pokedex = JSON.parse(rawdata);

///Important!! Enables CORS (cross-origin resource sharing). In order for your server to be accessible by other origins (domains)
app.use(cors());

//3. First route
app.get("/", (req, res) => {
  res.send("Welcome to the pokedex!");
});

//4. Route for getting all the pokemon
app.get("/pokemon", (req, res) => {
  res.json(pokedex);
});

//5. Route for getting pokemon by id
//finding the pokemon and sending the json response of that pokemon
app.get("/pokemon/:id", (req, res) => {
  let { id } = req.params;
  const pokemon = pokedex.find((pokemon) => pokemon.id === parseInt(id));
  res.json(pokemon);
});

//6. Route for getting all the pokemon by their id + type
///parseInt() converts first argument to string, parses it & returns an integer or NaN
app.get("/pokemon/:type", (req, res) => {
  let { id } = req.params;
  const pokemon = pokedex.find((pokemon) => pokemon.id === parseInt(id));
  res.json(pokemon[type]);
});
for (const [key, value] of Object.entries(pokedex)) {
  console.log(value.type[0]);
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
