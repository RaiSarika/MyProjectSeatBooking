'use strict';

import mongoose from 'mongoose';

var TheatresendpointSchema = new mongoose.Schema({
  TheatreName: String,
  MovieName: String,
  City: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Theatresendpoint', TheatresendpointSchema);
