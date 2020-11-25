const CommentsService = {
	getAllComments(db) {
		return db
			.from('comments')
	},

	getCommentById(db, comment_id) {
		return CommentsService.getAllComments(db)
			.where('comments.id', comment_id)
			.first();
	},
	getCommentsByUserId(db, user_id) {
		return CommentsService.getAllComments(db)
			.where('comments.user_id', user_id)
	},
	getCommentsByComicId(db, comic_id) {
		return CommentsService.getAllComments(db)
			.where('comments.comic_id', comic_id)
			.leftJoin('users',
				'comments.user_id', 'users.id'
			)
			.groupBy('comments.user_id', 'users.id')
	},
	insertComment(db, newComment) {
		return db
			.insert(newComment)
			.into("comments")
			.returning("*")
		// .then(([comment]) => comment)
		// .then(comment => CommentsService.getCommentById(db, comment.id));
	},
}

module.exports = CommentsService