let express = require("express");
let bodyParser = require("body-parser");
let methodOverride = require("method-override");
let flash = require("connect-flash");
let expressSession = require("express-session");
let routes = require("./routes");
let expressValidator = require('express-validator');
let app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
app.use(expressValidator());

app.use(expressSession({
    secret: "Nomi is a Russian blue",
    resave: false,
    saveUninitialized: false
}));

// locals
app.use((req, res, next) => {
    res.locals.errorMessage = req.flash("error");
    res.locals.successMessage = req.flash("success");
    next();
});

app.use(routes);

// root route
app.get("/", (req, res) =>{
    res.render("withdrawal");
});

const PORT = process.env.PORT || 8080;
const IP = process.env.IP || "localhost";

// server start
app.listen(PORT, IP, () => {
    console.log(`Server started at ${IP}:${PORT}`);
});