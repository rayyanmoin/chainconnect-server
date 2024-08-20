const Comment = require("../models/commentModel");
const Post = require("./../models/copiesModel");

const getComment = async (req, res) => {
	try {
		const { postId } = req.body;
		const findComment = await Comment.find({ postId });
		if (!findComment) {
			throw new Error("No comment");
		}
		res.status(200).json({ data: findComment });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const setComment = async (req, res) => {
	try {
		const { postId, comment: commentMessage, userAddress, userName } = req.body;
		const post = await Post.find({ postId });
		if (!postId) {
			throw new Error("No post");
		}
		const commentBody = new Comment({
			postId: postId,
			comment: commentMessage,
			userAddress: userAddress,
			userName: userName,
		});
		const newComment = await commentBody.save();
		res.status(200).json({ data: newComment });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	getComment,
	setComment,
};
