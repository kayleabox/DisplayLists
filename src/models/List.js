const mongoose = require('mongoose');

const { Schema } = mongoose; 

const listSchema = new Schema({
  title: String,
  items: [String],
  _user: { type: Schema.Types.ObjectId, ref: 'User'},
  dateCreated: Date,
  lastModified: Date
});

mongoose.model('lists', listSchema);