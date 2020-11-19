const ComicsService = {
	getAllComics(db) {
		return db
			.from('comics')
	},

	getComicByWeekId(db, week_id) {
		return ComicsService.getAllComics(db)
			.where('comics.week_id', week_id)
	},

	getById(db, week_id) {
		return ComicssService.getAllComics(db)
			.where("comics.week_id", week_id)
			.first();
	},
	insertComics(db, newComics) {
		return db
			.insert(newComics)
			.into("comics")
			.returning("*")
			.then(([comics]) => comics)
			.then(comics => ComicssService.getById(db, comics.week_id));
	},
}

module.exports = ComicsService