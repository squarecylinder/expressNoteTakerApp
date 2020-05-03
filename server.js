var express = require("express");
//including the const after HW Sessions
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================

// creating an "express" server
var app = express();
// Sets an initial port.
var PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

//After HW Session
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT)
})