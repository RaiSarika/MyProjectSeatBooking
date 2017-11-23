'use strict';

import mongoose from 'mongoose';

var BookingendpointSchema = new mongoose.Schema({
  theatre:String,
  year:String,
  name: String,
  time: String,
  date: String,
  city: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Bookingendpoint', BookingendpointSchema);
