const CommentsService = require('./comments-service')
const express = require("express");
const jsonBodyParser = express.json();

const commentsRouter = express.Router();

const serializeComment = comment => ({

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

commentsRouter
	.route('/')
	.get((req, res, next) => {
		CommentsService.getAllComments(req.app.get('db'))
			.then(comments => {
				res
					.status(201)
					.json(comments)
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
		// 			for (const [key, value] of Object.entries(newComment))
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


commentsRouter
	.route('/:comment_id')
	// .all(checkCommentExists)
	// .get((req, res) => {
	// 	res.json(res.comment);
	// })
	.get((req, res, next) => {
		CommentsService.getCommentById(
			req.app.get('db'),
			req.params.comment_id
		)
			.then(comment => {
				res
					.status(200)
					.json(comment);
			})
			.catch(next)
	})
commentsRouter
	.route('/comic/:comic_id')
	// .all(checkCommentExists)
	// .get((req, res) => {
	// 	res.json(res.comment);
	// })
	.get((req, res, next) => {
		CommentsService.getComicByComicId(
			req.app.get('db'),
			req.params.comic_id
		)
			.then(comment => {
				res
					.status(200)
					.json(comic);
			})
			.catch(next)
	})
// async function checkCommentExists(req, res, next) {
// 	try {
// 		const comment = await CommentsService.getCommentById(
// 			req.app.get("db"),
// 			req.params.comment_id
// 		);

// 		if (!comment)
// 			return res
// 				.status(404)
// 				.json({
// 					error: `Comment doesn't exist`
// 				});

// 		res.comment = comment;
// 		next();
// 	} catch (error) {
// 		next(error);
// 	}
// }
module.exports = commentsRouter