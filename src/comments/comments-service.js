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
	getCommentByUserId(db, user_id) {
		return CommentsService.getAllComments(db)
			.where('comments.user_id', user_id)
	},
	getCommentByComicId(db, comic_id) {
		return CommentsService.getAllComments(db)
			.where('comments.comic_id', comic_id)
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