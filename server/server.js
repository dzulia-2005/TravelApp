const express = require("express");
const connectDB = require("./database/db");
const authRoute = require("./routes/auth/index");
const countryRoute = require("./routes/countries//index");
const cors = require("cors");
const path = require("path");
const verifyToken = require("./middlewares/verifyToken");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const { title } = require("process");

const app = express();

app.use(
    cors({
        origin:"*",
    })
);

const swaggerOptions = {
    definition: {
        openapi:"3.0.0",
        info : {
            title:"swagger",
            version:'1.0.0',
            description: "API documentation for your project",
        }
    },
    apis:[
        './routes/auth/index.js',
        './routes/countries/index.js'
    ]
}

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));


app.use("/uploads",express.static(path.join(__dirname,"uploads")));
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/country",verifyToken,countryRoute);

connectDB()

app.listen(3000 , () => {
    console.log("server running port on 3000")
    connectDB();
});