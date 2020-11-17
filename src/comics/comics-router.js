const ComicsService = require('./comics-service')
const express = require("express");
const jsonBodyParser = express.json();

const comicsRouter = express.Router();

comicsRouter
	.route('/')