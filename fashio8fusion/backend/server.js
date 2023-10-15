require("dotenv").config();
const config = require('./utils/config')
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const mainRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/product-router");
const customMiddleware = require("./middleware/customMiddleware");

//const port = process.env.PORT || 5001;

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use(customMiddleware.reqLogger);

app.use("/", mainRoutes);
app.use("/api", productRoutes);

app.use("/images", express.static("images"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(customMiddleware.unknownEndpoint);

app.use(customMiddleware.errorHandler);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});

module.exports = app;