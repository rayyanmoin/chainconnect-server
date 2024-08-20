const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
	postId: {
		type: String,
		required: true,
	},
	comment: {
		type: String,
		required: true,
	},
	userAddress: {
		type: String,
		required: true,
	},
	userName: {
		type: String,
		required: true,
	},

},
    {timestamps: true}
);

module.exports = mongoose.model("Comments", commentSchema)