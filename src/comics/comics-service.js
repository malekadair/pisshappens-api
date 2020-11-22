const ComicsService = {
	getAllComics(db) {
		return db
			.from('comics')
	},

	getComicByWeekId(db, week_id) {
		return ComicsService.getAllComics(db)
			.where('comics.week_id', week_id)
	},

	getComicById(db, comic_id) {
		return ComicsService.getAllComics(db)
		// .where('comics.id', comic_id)
		// .first();
	},
	insertComic(db, newComic) {
		return db
			.insert(newComic)
			.into("comics")
			.returning("*")
			.then(([comic]) => comic)
			.then(comic => ComicsService.getById(db, comic.week_id));
	},
}

module.exports = ComicsService