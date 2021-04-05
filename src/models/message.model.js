const mongoose = require('mongoose');

const messageSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      }
    },
    {
      timestamps: false,
    }
  );

const Message = mongoose.model('message', messageSchema);

module.exports = Message;
  