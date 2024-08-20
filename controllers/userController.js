const Users = require("../models/userModel");

const getAllUsers = async (req, res) => {
	try {
		const users = await Users.find();
		res.json(users);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const getUserById = async (req, res) => {
	res.json(res.user);
};

const deleteUserById = async (req, res) => {
	try {
		await res.user.remove();
		res.json({ message: "User deleted" });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const updateUserById = async (req, res) => {
	if (req.body.name != null) {
		res.user.name = req.body.name;
	}

	if (req.body.email != null) {
		res.user.email = req.body.email;
	}

	if (req.body.age != null) {
		res.user.age = req.body.age;
	}

	try {
		const updatedUser = await res.user.save();
		res.json(updatedUser);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

const createUser = async (req, res) => {
	const user = new Users({
		name: req.body.name,
		email: req.body.email,
		age: req.body.age,
	});
	console.log(user);

	try {
		const newUser = await user.save();
		res.status(201).json(newUser);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

const getUser = async function getUser(req, res, next) {
	let user;
	try {
		user = await User.findById(req.params.id);
		if (user == null) {
			return res.status(404).json({ message: "Cannot find user" });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}

	res.user = user;
	next();
};

module.exports = {
	getAllUsers,
	getUserById,
	deleteUserById,
	updateUserById,
	createUser,
	getUser,
};
