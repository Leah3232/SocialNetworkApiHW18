const mongoose = require('mongoose');
//Establish db connection 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialmedia', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;