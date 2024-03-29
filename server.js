require("dotenv").config();
require('./config/db.connection.js')

const { PORT } = process.env;

const express = require("express");

const app = express();

// import routers
const parkRouter = require('./routes/park')

const cors = require("cors")
const morgan = require("morgan")

// MIDDLEWARE
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use('/parks', parkRouter)

// test route
app.get("/", (req, res) => {
    res.send("hello world");
});

//listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
