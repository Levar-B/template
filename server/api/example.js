const router = require('express').Router();
const { Example } = require('../db');

// GET /api/example

router.get('/', async (req, res, next) => {
	try {
		res.send();
	} catch (e) {
		next(e);
	}
});
