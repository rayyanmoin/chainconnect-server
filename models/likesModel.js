const mongoose = require("mongoose");

const likesSchema = new mongoose.Schema(
	{
		postId: {
			type: String,
			required: true,
		},
		likesArray: {
			type: Array,
			required: true,
		},
		claimedLikesCount: {
			type: Number,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Likes", likesSchema);
