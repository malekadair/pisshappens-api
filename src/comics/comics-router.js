const ComicsService = require('./comics-service')
const express = require("express");
const jsonBodyParser = express.json();

const comicsRouter = express.Router();

const serializeComic = comic => ({
	guess_id: guess.guess_id,
	user_id: guess.user_id,
	week_id: guess.week_id,
	guess_1: xss(guess.guess_1),
	guess_2: xss(guess.guess_2),
	guess_3: xss(guess.guess_3),
	guess_4: xss(guess.guess_4),
	guess_5: xss(guess.guess_5),
	power_ball: xss(guess.power_ball),
	guess_created_date: guess.guess_created_date,
	message: xss(guess.message),
	has_won: guess.has_won,
	user_name: guess.user_name,
	password: guess.password,
	user_created_date: guess.user_created_date,
	date_modified: guess.date_modified,
	week_start_date: guess.week_start_date
});

comicsRouter
	.route('/')
	.get((req, res, next) => {
		ComicsService.getAllComics(req.app.get('db'))
			.then(comics => {
				res.json(comics.map(serializeComic))
			})
			.catch(next)


	})
module.exports = comicsRouter