
const express = require('express')
const app = express()
const cookieParser = require("cookie-parser");
const navRoute = require("./routes/navigation");
const userRoute = require("./routes/user");
const path = require("path");

app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "/public")));

app.use(express.json());
app.use(cookieParser())
app.use("/", navRoute);
app.use("/", userRoute);

app.listen(8080, () => console.log("started node server"))