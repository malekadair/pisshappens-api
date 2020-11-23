const ComicsService = require('./comics-service')
const express = require("express");
const jsonBodyParser = express.json();

const comicsRouter = express.Router();

const serializeComic = comic => ({

	// guess_id: guess.guess_id,
	// user_id: guess.user_id,
	// week_id: guess.week_id,
	// guess_1: xss(guess.guess_1),
	// guess_2: xss(guess.guess_2),
	// guess_3: xss(guess.guess_3),
	// guess_4: xss(guess.guess_4),
	// guess_5: xss(guess.guess_5),
	// power_ball: xss(guess.power_ball),
	// guess_created_date: guess.guess_created_date,
	// message: xss(guess.message),
	// has_won: guess.has_won,
	// user_name: guess.user_name,
	// password: guess.password,
	// user_created_date: guess.user_created_date,
	// date_modified: guess.date_modified,
	// week_start_date: guess.week_start_date
});

comicsRouter
	.route('/')
	.get((req, res, next) => {
		ComicsService.getAllComics(req.app.get('db'))
			.then(comics => {
				res
					.status(201)
					.json(comics)
			})
			.catch(next)
		// 		.post(jsonBodyParser, (req, res, next) => {
		// 			const { user_id, week_id, guess_1, guess_2, guess_3, guess_4, guess_5, power_ball, message } = req.body
		// 	const newGuess = {
		// 		user_id,
		// 		week_id,
		// 		guess_1,
		// 		guess_2,
		// 		guess_3,
		// 		guess_4,
		// 		guess_5,
		// 		power_ball,
		// 		message
		// 	}
		// 			for (const [key, value] of Object.entries(newComic))
		// 				if (value == null)
		// 					return res.status(400).json({
		// 						error: `Missing '${key}' in request body`
		// 					});
		// 			GuessesService.insertGuess(req.app.get("db"), newGuess)
		// 				.then(guess => {
		// 					res
		// 						.status(201)
		// 						.json(guess);
		// 				})
		// 				.catch(next);
		// 		})

	})


comicsRouter
	.route('/:comic_id')
	// .all(checkComicExists)
	// .get((req, res) => {
	// 	res.json(res.comic);
	// })
	.get((req, res, next) => {
		ComicsService.getComicById(
			req.app.get('db'),
			req.params.comic_id
		)
			.then(comic => {
				res
					.status(200)
					.json(comic);
			})
			.catch(next)
	})
// async function checkComicExists(req, res, next) {
// 	try {
// 		const comic = await ComicsService.getComicById(
// 			req.app.get("db"),
// 			req.params.comic_id
// 		);

// 		if (!comic)
// 			return res
// 				.status(404)
// 				.json({
// 					error: `Comic doesn't exist`
// 				});

// 		res.comic = comic;
// 		next();
// 	} catch (error) {
// 		next(error);
// 	}
// }
module.exports = comicsRouter