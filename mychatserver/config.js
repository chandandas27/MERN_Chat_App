const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// To deploy database use any cloud database and provide the link below
 const connection = mongoose.connect('mongodb://localhost:27017/mychat')
 .then(() => console.log('Connected to MongoDB ...'))
 .catch(err => console.error('Could not connect to MongoDB:27017', err));
 


 
 module.exports = [].concat(connection);




