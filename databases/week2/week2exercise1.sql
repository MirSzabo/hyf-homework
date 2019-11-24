-- Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID
INSERT INTO task (
	title,
	description, 
	created, 
	updated, 
	due_date, 
	status_id, 
	user_id
) VALUES (
	'Learn about MySQL',
	'interesting',
	NOW(),
	NOW(),
	'2019-12-23 10:13:42',
	1,
	7
);

SELECT * FROM task ORDER BY id DESC LIMIT 10;
SELECT * FROM task WHERE id = 36;

-- Change the title of a task with these attributes: taskID, newTitle
UPDATE task 
SET title = 'Learn JavaScript' 
WHERE id = 36;

-- Change the task due date with these attributes: taskID, newDueDate
UPDATE task 
SET due_date = '2019-12-31 15:03:55' 
WHERE id = 36;

-- Change the task status with these attributes: taskID, newStatus
UPDATE task 
SET status_id = 2
WHERE id = 36;

-- Mark a task as complete with this attribute: taskID
UPDATE task 
SET status_id = 3
WHERE id = 36;

-- Delete task with this attribute: taskID
DELETE FROM task 
WHERE id = 36;