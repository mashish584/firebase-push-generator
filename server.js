const express = require("express");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const flash = require("connect-flash");

// routes
const indexRoute = require("./routes/indexRoute");

// error handler
const { NotFoundError, ErrorRendering } = require("./handlers/errorHandler.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "assets")));
// app.use(favicon(path.join(__dirname, 'path_to_icon')));
// app.use(flash());

// session middleware
// app.use(
// 	session({
// 		secret: process.env.SECRET,
// 		resave: false,
// 		saveUninitialized: false,
// 		store: new MongoStore({ mongooseConnection: mongoose.connection }),
// 		cookie: { maxAge: 10 * 60 * 60 * 1000 } // 10 hours
// 	})
// );

app.use((req, res, next) => {
	res.locals.user = req.user || null;
	// res.locals.flash = req.flash('info','djaljsdl');
	next();
});

// setting up ejs as templating engine
app.set("view engine", "ejs");

// Application routes
app.use(indexRoute);

app.post("/post", (req, res, next) => {
	return res.json({ body: req.body });
});

// catch 404 and forward to error handlers
app.use(NotFoundError);

// error rendering
app.use(ErrorRendering);

module.exports = app;
