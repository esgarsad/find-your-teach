const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const PostSchema = new Schema(
  {
    postTitle: {
      type: String,
      required: 'You need a title',
      minlength: 1,
      maxlength: 60
    },
    postText: {
      type: String,
      required: 'Please include some description',
      minlength: 1,
      maxlength: 280
    },
    postPrice: {
      type: Number,
      required: 'Indicate your class price',
         },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

PostSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Post = model('Post', PostSchema);

module.exports = Post;
