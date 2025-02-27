const express = require("express");
const authRoute = require("./routes/auth/index");
const countryRoute = require("./routes/countries//index");
const app = express();

app.use(express.json());
app.use("/api/auth/",authRoute);
app.unsubscribe("/api/country",countryRoute);

app.listen(3000 , () => console.log("server started on 3000 port"));