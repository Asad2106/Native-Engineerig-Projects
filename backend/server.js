const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const movies = [
  {
    id:1,
    title:"Stranger Things",
    description:"Sci-fi thriller series"
  },
  {
    id:2,
    title:"Money Heist",
    description:"Crime drama series"
  },
  {
    id:3,
    title:"Breaking Bad",
    description:"Crime drama"
  }
];

app.get("/movies",(req,res)=>{
  res.json(movies);
});

app.listen(5000,"0.0.0.0",()=>{
  console.log("Server running on http://localhost:5000");
});;