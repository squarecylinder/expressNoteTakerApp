var path = require("path");

//HW Session Brooks said this is the preferred way to do it
var router = require("express").Router();
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
})
//default route
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})
module.exports = router;
//original code
// module.exports = (app) => {
//   HTML GET Requests
//   Below code handles when users "visit" a page.
//   In each of the below cases the user is shown an HTML page of content
//   ---------------------------------------------------------------------------
//   Basic route that sends the user first to the AJAX Page
//   app.get("/notes", (req, res) => {
//       res.sendFile(path.join(__dirname, "../public/notes.html"));
//   });
//   app.get("*", (req, res) => {
//       res.sendFile(path.join(__dirname, "../public/index.html"));
//   });
// }