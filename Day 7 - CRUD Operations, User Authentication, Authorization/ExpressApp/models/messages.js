const mongoose = require('mongoose');

const MessageSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Message", MessageSchema);
