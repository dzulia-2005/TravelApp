const express = require("express");
const connectDB = require("./database/db");
const authRoute = require("./routes/auth/index");
const countryRoute = require("./routes/countries//index");
const cors = require("cors");
const path = require("path");
const verifyToken = require("./middlewares/verifyToken")
const app = express();

app.use(
    cors({
        origin:"*",
    })
);
app.use("/uploads",express.static(path.join(__dirname,"uploads")));
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/country",verifyToken,countryRoute);

connectDB()

app.listen(3000 , () => {
    console.log("server running port on 3000")
    connectDB();
});