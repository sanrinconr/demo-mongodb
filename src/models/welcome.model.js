const mongoose = require('mongoose');

const welcomeSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      }
    },
    {
      timestamps: true,
    }
  );

const Welcome = mongoose.model('welcomeSchema', welcomeSchema);

module.exports = Welcome;
  