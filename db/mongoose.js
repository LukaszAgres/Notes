const mongoose = require('mongoose');
const { database } = require('../config');
//połączenie z bazą
mongoose.connect(database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

 