const Note = require('../../db/models/note');

/* module.exports = {
    saveNote(req,res) {
       
       
        const newNote = new Note({ 
            title: 'Zrobic zakupy2', 
            body: 'mleko, ser2'
          });
          newNote.save().then(() => {
            console.log('notatka zapisana')
          });
        res.send('Strona główna działa!');
    }
} */

class NoteActions {
    
    saveNote(req,res) {
    /*     const newNote = new Note({ 
            title: 'Zrobic zakupy', 
            body: 'mleko, ser'
          });
          newNote.save().then(() => {
            console.log('notatka zapisana')
          }); */
        const title = req.body.title;
        const body = req.body.body;

        res.send('Notatka stworzona. Tytuł:' + title + ' treść:' + body);
    }

    getAllNotes(req,res) {
        //pobieranie notatek
        res.send('API DZIALA');
    }
    getNote(req,res) {
        //pobieranie notatki
        res.send('Info o notatce');
    }
    updateNote(req,res) {
        //aktualizwoanie notatki
        res.send('Notatka zaktualizowana');
    }
    deleteNote(req,res) {
        const id = req.params.id;
        //usuwanie notatki
        res.send('Notatka usunieta o numerze ID: ' + id);
    }
}

module.exports = new NoteActions();