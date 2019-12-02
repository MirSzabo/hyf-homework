CREATE DATABASE meal_sharing;
USE meal_sharing;
CREATE TABLE `meal` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	`title` varchar(255) NOT NULL,
	`description` text NULL DEFAULT NULL,
	`location` varchar(255) NOT NULL,
	`when` DATETIME NOT NULL,
	`max_reservations` int(10) unsigned NOT NULL,
	`price` DECIMAL(10, 2) NOT NULL,
	`created_date` DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `reservation` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	`number_of_guests` int(10) unsigned NOT NULL,
	`meal_id` int(10) unsigned NOT NULL,
	`created_date` DATETIME NOT NULL DEFAULT NOW(),
    PRIMARY KEY (`id`),
FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `review` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	`title` varchar(255) NOT NULL,
	`description` text NULL DEFAULT NULL,
    `meal_id` int(10) unsigned NOT NULL,
    `stars` int(10) unsigned NOT NULL,
	`created_date` DATETIME,
PRIMARY KEY (`id`),
FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Get all meals
SELECT * FROM meal;
-- Add a new meal
INSERT INTO `meal` (
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`, 
    `price`,
    `created_date`
) VALUES (
	'Pizza Vegan',
	'Vegetarian pizza with vegan cheese',
    'Froslevvej 13A',
	'2019-12-30 12:30:00',
	5,
	100,
	'2019-12-27 10:30:00'
);
INSERT INTO `meal` (
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`, 
    `price`,
    `created_date`
) VALUES (
	'Pizza Italiana',
	'Pizza with corn and bacon',
    'Froslevvej 13A',
	'2019-12-30 12:30:00',
	6,
	50,
	'2019-12-29 16:30:00'
);
INSERT INTO `meal` (
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`, 
    `price`,
    `created_date`
) VALUES (
	'Pasta with blue cheese',
	'Simple and tasty',
    'Rodovrevej 128',
	'2019-12-31 15:20:00',
	10,
	80,
	'2019-12-27 10:30:00'
);
-- Get a meal with any id, fx 1
SELECT * FROM meal
WHERE `id` = 1;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal 
SET title = 'Pizza Haway' 
WHERE id = 1;
-- Delete a meal with any id, fx 1
DELETE FROM meal 
WHERE id = 1;

-- Get all reservations
SELECT * FROM reservation;
-- Add a new reservation
INSERT INTO `reservation` (
    `number_of_guests`,
    `meal_id`,
    `created_date`
) VALUES (
	4,
	1,
	'2019-12-27 09:15:00'
);
INSERT INTO `reservation` (
    `number_of_guests`,
    `meal_id`,
    `created_date`
) VALUES (
	8,
	2,
	'2019-12-26 17:15:00'
);
INSERT INTO `reservation` (
    `number_of_guests`,
    `meal_id`,
    `created_date`
) VALUES (
	3,
	2,
	'2019-11-26 08:15:00'
);
-- Get a reservation with any id, fx 1
SELECT * FROM reservation
WHERE `id` = 2;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation 
SET number_of_guests = 1
WHERE id = 2;
-- Delete a reservation with any id, fx 1
DELETE FROM reservation 
WHERE id = 1;

-- Get all reviews
SELECT * FROM review;
-- Add a new review
INSERT INTO `review` (
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
) VALUES (
	'nice restaurant',
    'we were very happy with service and food',
    1,
    4,
    DATE(NOW())
);
INSERT INTO `review` (
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
) VALUES (
	'very good',
    'we were very satisfied',
    2,
    5,
    DATE(NOW())
);
INSERT INTO `review` (
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
) VALUES (
	'nothing special',
    'I would improve few things',
    1,
    2,
    DATE(NOW())
);
-- Get a review with any id, fx 1
SELECT * FROM review
WHERE id = 1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET title = 'very good experience'
WHERE id = 1;
-- Delete a review with any id, fx 1
DELETE FROM review 
WHERE id = 1;

-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal
WHERE meal.price < 90.00;
-- Get meals that still has available reservations
SELECT meal.id, meal.title, (meal.max_reservations-reservation.number_of_guests) AS `available_reservations`, reservation.number_of_guests FROM Meal
INNER JOIN reservation
ON meal.id = reservation.meal_id
WHERE number_of_guests < max_reservations;
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal
WHERE title LIKE "%pizza v%";
-- Get meals that has been created between two dates
SELECT * FROM meal
WHERE `created_date` >= '2019-12-20' AND `created_date` <= '2019-12-28';
-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal
LIMIT 5;
-- Get the meals that have good reviews
SELECT meal.id, meal.title, meal.price, review.stars FROM meal
INNER JOIN review
ON meal.id = review.meal_id
WHERE review.stars > 3;
-- Get reservations for a specific meal sorted by created_date
SELECT * FROM reservation
WHERE `meal_id` = 2
ORDER BY `created_date` DESC;
-- Sort all meals by average number of stars in the reviews
SELECT meal.title, AVG(review.stars) AS `average_rating` FROM meal
INNER JOIN review
ON meal.id = review.meal_id
GROUP BY meal.id
ORDER BY review.stars DESC;