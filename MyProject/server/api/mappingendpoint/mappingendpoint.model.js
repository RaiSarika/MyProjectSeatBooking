'use strict';

import mongoose from 'mongoose';

var MappingendpointSchema = new mongoose.Schema({
  date: String,
  time: String,
  name: String,
  year: String,
  city: String,
  theatre: String,
  //location: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Mapping', MappingendpointSchema);
