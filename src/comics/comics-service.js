const ComicsService = {
	getAllComics(db) {
		return db
			.from('comics')
	},

	getComicById(db, comic_id) {
		return ComicsService.getAllComics(db)
			.where('comics.id', comic_id)
			.first();
	},
	insertComic(db, newComic) {
		return db
			.insert(newComic)
			.into("comics")
			.returning("*")
		// .then(([comic]) => comic)
		// .then(comic => ComicsService.getComicById(db, comic.id));
	},
}

module.exports = ComicsService