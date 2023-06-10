const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");



//REGISTER
router.post("/register", async (req, res) => {
	try {
		const { username, email, password } = req.body; // Destructure the request body
		console.log(req.body)

		// Check to see if the email already exists and throw an error if it does
		const checkUser = await User.findOne({ email });
		if (checkUser) {
			return res.status(401).json("Email already exists!");
		}

		// If the email doesn't exist, hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create a new user instance
		const newUser = new User({
			username,
			email,
			password: hashedPassword
		});

		// Save the user and respond
		const savedUser = await newUser.save(); // Save the user to the database
		res.status(200).json(savedUser);
	} catch (error) {
		console.log(error);
		res.status(500).send(error.message);
	}
});


//LOGIN

router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		if (!user) {
			return res.status(401).json("Wrong password or username!")
		}

		const hashedPassword = await bcrypt.compare(req.body.password, user.password);
		console.log(hashedPassword);
		if (!hashedPassword) {
			return res.status(401).json("Wrong password or username!")
		}

		const accessToken = jwt.sign(
			{ id: user._id, isAdmin: user.isAdmin },
			process.env.JWT_SEC,
			{ expiresIn: "10d" }
		);
		console.log(accessToken);
		const { password, ...others } = user._doc;
		res.status(200).json({ ...others, accessToken });

	} catch (err) {
		res.status(500).json({ message: err });
	}
});

module.exports = router;