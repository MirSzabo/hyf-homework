-- Create a new database containing the following tables:
-- Class: with the columns: id, name, begins (date), ends (date)
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE DATABASE school;
USE school;
CREATE TABLE `class` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`name` varchar(255) NOT NULL,
`begins` DATETIME NOT NULL DEFAULT NOW(),
`ends` DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

create table `student` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`name` varchar(255)  NOT NULL,
`email` varchar(255) NOT NULL,
`phone` varchar(255) NOT NULL,
`class_id` int(10) unsigned NOT NULL,
PRIMARY KEY (`id`),
 CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create an index on the name column of the student table.
ALTER TABLE student ADD INDEX (name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class 
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') NOT NULL;