var express = require('express'),
    app = express(),
    router = express.Router();
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    methodOverride = require('method-override'),
    paypal = require('paypal-rest-sdk'),
    port = process.env.port || 8080,
    dbUrl = process.env.DATABASEURL || "mongodb://localhost/landing";
    indexRoutes = require('./routes/index'),
    paypalClientId = process.env.PAYPALCLIENT,
    paypalSecret = process.env.PAYPALSECRET;

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
// PayPal Config
// ===================
paypal.configure({
    mode: 'sandbox', // Sandbox or live
    client_id: paypalClientId,
    client_secret: paypalSecret});
// ===================
// Routes Config
// ===================
app.use("/", indexRoutes);

app.listen(port, function(){
    console.log("Server is running");
});


