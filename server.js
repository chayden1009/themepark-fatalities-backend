require("dotenv").config();
require('./config/db.connection.js')

const { PORT } = process.env;

const express = require("express");

const app = express();

// import routers
const parkRouter = require('./routes/park')
const incidentRouter = require('./routes/incident')
const rideRouter = require('./routes/ride')

const cors = require("cors")
const morgan = require("morgan")

// MIDDLEWARE
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use('/park', parkRouter)
app.use('/incident', incidentRouter)
app.use('/ride', rideRouter)


// test route
app.get("/", (req, res) => {
    res.send("hello world");
});

//listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
