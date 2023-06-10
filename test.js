const bcrypt = require('bcrypt');

const testBcrypt = async () => {
	try {
		const password = 'test123';
		const saltRounds = 10;

		const salt = await bcrypt.genSalt(saltRounds);
		const hashedPassword = await bcrypt.hash(password, salt);
		console.log('Hashed Password:', hashedPassword);
	} catch (error) {
		console.log(error);
	}
};

testBcrypt();