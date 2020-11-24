BEGIN;

TRUNCATE
	comments,
	comics,
	users;

INSERT INTO users (user_name, full_name, password)
VALUES
  ('admin', 'Administrator Gary', '$2a$12$rugz4SDjwR.33.UL1fOlQ.qMmpZ5MfRQI6dXJi8w4vj526IFM5eou'),
  ('malek', 'Malek Haj-Hussein', '$2a$12$3D/FNCVfI/RkbY.pw6HmbevZSFBBwxoHoIk/YTRVLQdIh9C0ECgYS'),
  ('grace', 'Grace Bodur', '$2a$12$pOde1szWj5A6dGcODWCUY.KHFKqkMuGuUvRPDBm73FP9xwxxHEUlC');

INSERT INTO comics (creator_id, title, description)
VALUES
  (1, 'HAPPY comic', 'blah blah blah :)'),
  (1, 'UNHAPPY comic', 'blah :((((((('),
  (3, 'mad comic', 'BLAH!'),
  (2, 'just an ordinary comic', 'blah.');

INSERT INTO comments (comic_id, user_id, comment)
VALUES
  (1, 2, 'this is funny'),
  (1, 2, 'this is not funny'),
  (3, 3, 'THIS IS NOT FUNNY!!!!'),
  (2, 1, 'this is a comic');

COMMIT;