const ComicsService = {
	getAllDrawings(db) {
		return db
			.from('comics')
	},

	getComicByWeekId(db, week_id) {
		return DrawingsService.getAllDrawings(db)
			.where('comics.week_id', week_id)
	},

	getById(db, week_id) {
		return DrawingsService.getAllComics(db)
			.where("comics.week_id", week_id)
			.first();
	},
	insertComics(db, newDrawing) {
		return db
			.insert(newDrawing)
			.into("comics")
			.returning("*")
			.then(([drawing]) => drawing)
			.then(drawing => DrawingsService.getById(db, drawing.week_id));
	},
}

module.exports = DrawingsService