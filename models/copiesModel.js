const mongoose = require("mongoose");

const copiesSchema = new mongoose.Schema(
	{
		postId: {
			type: String,
			required: true,
		},
		pHash: {
			type: String,
			required: true,
		},
		copyOf: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Copies", copiesSchema);