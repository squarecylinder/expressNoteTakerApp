var router = require("express").Router();
var storeDB = require("../db/store");
//import store
//build routes to call store methodes
router.get("/notes", async (req, res) => {
    var data = await storeDB.getNotes();
    res.json(data);
});

router.post("/notes", async (req, res) => {
    var addingNote = await storeDB.addNote(req.body);
    res.json(addingNote);
});

router.delete("/notes/:id", function(req, res) {
    // kept getting await is only valid in async function
    //so I just removed await from var deletingNote
    //Now all is well for some reason.
    var deletingNote = storeDB.removeNote(req.params.id);
    try {
        res.json(deletingNote)
    }
    catch{
        err => res.status(500).json(err);
    }
  });

module.exports = router;