require("dotenv").config(); // Import dotenv to use environment variables
const express = require("express"); // Import express to create a server
const mongoose = require("mongoose"); // Import mongoose to connect to the database
const cors = require("cors"); // Import cors to handle requests from different origins

// const usersRoutes = require("./routes/users-routes");
// const placeRoutes = require("./routes/places-routes");

// Connect to the database

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

// Create a server
const app = express(); //app is an instance of express app allows us to use express methods

//middleware to parse incoming requests with JSON payloads
app.use(express.json());

//middleware to handle requests from different origins
app.use(cors());

//middleware to serve static files
// app.use("/uploads/images", express.static("uploads/images"));

// // middleware to handle requests to /api/users
// app.use("/api/users", usersRoutes);
// app.use("/api/places", placeRoutes);

// start the server
app.listen(3000, () => {
  //
  console.log("Server is running on port 3000");
});
