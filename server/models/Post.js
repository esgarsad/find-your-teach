const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
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
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

PostSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Post = model('Post', PostSchema);

module.exports = Post;
