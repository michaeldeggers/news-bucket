var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
  title: String,
  author: String,
  body: String,
  url: String
});

var News = mongoose.model('News', newsSchema);

module.exports = News;
