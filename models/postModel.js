const moongoose = require('mongoose');

const PostsModel = moongoose.model(
    "node-api",
    {
        author: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    "posts"
);

module.exports = { PostsModel };
