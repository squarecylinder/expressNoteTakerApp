const util = require("util");
const fs = require("fs");

const { v4: uuidv4 } = require('uuid');

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

//creating a class that will control our database
class Store {
    read() {
        return readFileAsync("./db/db.json", "utf8");
    }

    write(note){
        return writeFileAsync("./db/db.json", JSON.stringify(note));  
    }

    async getNotes() {
        var notes = await this.read();
        var notesList = JSON.parse(notes);
        return notesList;
    }

    async addNote(note) {
        //taking the req.body from apiRoutes.js and creating a new object for the notes
        var newNote = {
            //takes the notes title and saves it to a new title
            title: note.title,
            //takes the notes text and saves it to a new text
            text: note.text,
            //creates a unique id using uuid
            id: uuidv4()
        }
        //grabing the current db.json file to read all of the notes
        var updatedNotes = await this.getNotes();
        updatedNotes.push(newNote);
        //Writes our full note array into the db.json file
        await this.write(updatedNotes);
        //this should show the page the brand new updated notes
        return updatedNotes;
    }
    async removeNote(id) {
        //grabs the list of notes
        var notesList = await this.getNotes();
        //filters the list of notes
        var filteredList = await notesList.filter(note => note.id !== id)
        //writes the new filtered notes to the db.json
        await this.write(filteredList);
        return filteredList;
    }
}

module.exports = new Store();