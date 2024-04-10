const mongoose = require("mongoose");
const moment = require("moment");

const userSchema = new mongoose.Schema({
  avatar: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  followers: {
    type: Array,
  },
  followBtn: {
    type: String,
    default: "Follow",
  },
  tweets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tweets" }],
});

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
    image: {
      type: String,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User_twitter",
    },
    postedTweetTime: {
      type: String,
      default: moment().format("MMMM Do YYYY, h:mm:ss a"),
    },
    likes: {
      type: Array,
    },
    likeTweetBtn: {
      type: String,
      default: "black",
    },
    retweetBtn: {
      type: String,
      default: "black",
    },
    retweetedByUser: {
      type: String,
    },
    isRetweeted: {
      type: Boolean,
      default: false,
    },
    retweets: {
      type: Array,
      default: [],
    },
    isEdited: {
      type: Boolean,
      default: false,
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comments" }],
  },
  {
    timestamps: true,
  }
);

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User_twitter",
    },
    postedCommentTime: {
      type: String,
      default: moment().format("MMMM Do YYYY, h:mm:ss a"),
    },
    likes: {
      type: Array,
    },
    likeCommentBtn: {
      type: String,
      default: "black",
    },
    isEdited: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User_twitter", userSchema);
const Tweet = mongoose.model("Tweets", tweetSchema);
const Comment = mongoose.model("Comments", commentSchema);

module.exports = { User, Tweet, Comment };
