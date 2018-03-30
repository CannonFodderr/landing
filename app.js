var express = require('express'),
    app = express(),
    router = express.Router();
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    methodOverride = require('method-override'),
    port = process.env.port || 8080,
    dbUrl = process.env.DATABASEURL || "mongodb://localhost/landing";
    indexRoutes = require('./routes/index');

// ===================
// Mongoose Config
// ===================
mongoose.connect(dbUrl);

// ===================
// App Config
// ===================
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));

// ===================
// Routes Config
// ===================
app.use("/", indexRoutes);

app.listen(port, function(){
    console.log("Server is running");
});


