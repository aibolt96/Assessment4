const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getMagicEight, getMovie, addMovie, editMovie, deleteMovie,} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/magicAnswer", getMagicEight);
app.get("/api/movie", getMovie);
app.post("/api/movie", addMovie);
app.put("/api/movie/:id", editMovie);
app.delete("/api/movie/:id", deleteMovie)


app.listen(4000, () => console.log("Server running on 4000"));
