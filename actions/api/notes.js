const Note = require('../../db/models/note');

module.exports = {
    saveNote(req,res) {


        const newNote = new Note({ 
            title: 'Zrobic zakupy', 
            body: 'mleko, ser'
          });
          newNote.save().then(() => {
            console.log('notatka zapisana')
          });


        res.send('Strona główna działa!');
    }
}