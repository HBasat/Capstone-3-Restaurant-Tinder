BEGIN TRANSACTION;

-- hours of operation table. FK from table resturant. 
-- working time in minutes. this is to acount for night hour times. 
CREATE TABLE schedule(
    s_id serial,                                    -- unique ID of every schedule in db.
    sr_id int NOT NULL,                             -- FK unique ID of every resturant in the db.
    s_day varchar(3) NOT NULL,                      -- day of the week
    s_open varchar(5) NOT NULL DEFAULT '00:00',                     -- open time (24hrs)
    s_working_time varchar(6) NOT NULL DEFAULT '0',             -- working time/duration that resturant is open on that day
    s_close varchar(5) NOT NULL DEFAULT '00:00',                    -- closing time (24hrs)

    CONSTRAINT PK_sID PRIMARY KEY (s_id)            -- primary key is s_id
);


-- working time in mins 
-- INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('', '', '', '', '');

-- Shake Shack, Uptown Dallas
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('1', 'MON', '11:00', '660', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('1', 'TUE', '11:00', '660', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('1', 'WED', '11:00', '660', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('1', 'THU', '11:00', '660', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('1', 'FRI', '11:00', '720', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('1', 'SAT', '11:00', '720', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('1', 'SUN', '11:00', '660', '22:00');

-- The Woolworth
INSERT INTO schedule(sr_id, s_day) VALUES ('2', 'MON');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('2', 'TUE', '11:00', '780', '00:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('2', 'WED', '11:00', '780', '00:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('2', 'THU', '11:00', '780', '00:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('2', 'FRI', '11:00', '780', '00:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('2', 'SAT', '10:00', '840', '00:00');

-- Yardbird Table & Bar
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('3', 'MON', '11:00', '660', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('3', 'TUE', '11:00', '660', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('3', 'WED', '11:00', '660', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('3', 'THU', '11:00', '660', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('3', 'FRI', '11:00', '720', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('3', 'SAT', '10:00', '780', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('3', 'SUN', '10:00', '660', '22:00');

-- Meso Maya Comida y Copas
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('4', 'MON', '11:00', '660', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('4', 'TUE', '11:00', '660', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('4', 'WED', '11:00', '660', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('4', 'THU', '11:00', '660', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('4', 'FRI', '11:00', '780', '00:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('4', 'SAT', '11:00', '780', '00:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('4', 'SUN', '11:00', '660', '22:00');

--The Crab Station - Deep Ellum
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('5', 'MON', '12:00', '600', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('5', 'TUE', '12:00', '600', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('5', 'WED', '12:00', '600', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('5', 'THU', '12:00', '600', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('5', 'FRI', '12:00', '720', '00:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('5', 'SAT', '12:00', '720', '00:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('5', 'SUN', '12:00', '660', '23:00');

-----------------------------------------------------------------------------------------------------------------------------------

--Perch
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('6', 'MON', '16:00', '540', '01:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('6', 'TUE', '16:00', '540', '01:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('6', 'WED', '16:00', '540', '01:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('6', 'THU', '16:00', '600', '02:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('6', 'FRI', '16:00', '600', '02:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('6', 'SAT', '17:00', '540', '02:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('6', 'SUN', '17:00', '480', '01:00');

-- Bestia 
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('7', 'MON', '17:00', '360', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('7', 'TUE', '17:00', '360', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('7', 'WED', '17:00', '360', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('7', 'THU', '17:00', '360', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('7', 'FRI', '17:00', '360', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('7', 'SAT', '17:00', '360', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('7', 'SUN', '17:00', '360', '23:00');

-- Majordomo
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('8', 'MON', '17:00', '300', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('8', 'TUE', '17:00', '300', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('8', 'WED', '17:00', '300', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('8', 'THU', '17:00', '300', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('8', 'FRI', '17:00', '330', '22:30');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('8', 'SAT', '17:00', '330', '22:30');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('8', 'SUN', '17:00', '300', '22:00');

-- Tomato Pie Pizza Joint
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('9', 'MON', '11:00', '500', '21:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('9', 'TUE', '11:00', '500', '21:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('9', 'WED', '11:00', '500', '21:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('9', 'THU', '11:00', '500', '21:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('9', 'FRI', '11:00', '500', '21:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('9', 'SAT', '11:00', '500', '21:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('9', 'SUN', '11:00', '500', '21:00');

-- The Silver Lake House
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('10', 'MON', '11:30', '630', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('10', 'TUE', '11:30', '630', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('10', 'WED', '11:30', '630', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('10', 'THU', '11:30', '630', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('10', 'FRI', '11:30', '690', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('10', 'SAT', '11:30', '690', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('10', 'SUN', '11:30', '630', '22:00');

-----------------------------------------------------------------------------------------------------------------------------------

-- The Capital Grille
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('11', 'MON', '11:30', '570', '21:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('11', 'TUE', '11:30', '570', '21:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('11', 'WED', '11:30', '570', '21:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('11', 'THU', '11:30', '570', '21:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('11', 'FRI', '11:30', '570', '21:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('11', 'SAT', '11:30', '570', '21:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('11', 'SUN', '17:00', '240', '21:00');


-- Fiola Mare
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('12', 'MON', '14:30', '450', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('12', 'TUE', '11:30', '630', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('12', 'WED', '11:30', '630', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('12', 'THU', '11:30', '630', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('12', 'FRI', '11:30', '660', '22:30');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('12', 'SAT', '11:30', '660', '22:30');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('12', 'SUN', '11:30', '630', '22:00');

-- Jaleo by José Andrés
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('13', 'MON', '11:00', '660', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('13', 'TUE', '11:00', '720', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('13', 'WED', '11:00', '720', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('13', 'THU', '11:00', '720', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('13', 'FRI', '11:00', '780', '00:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('13', 'SAT', '10:00', '840', '00:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('13', 'SUN', '10:00', '720', '22:00');

-- Busboys and Poets
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('14', 'MON', '08:00', '840', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('14', 'TUE', '08:00', '840', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('14', 'WED', '08:00', '840', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('14', 'THU', '08:00', '840', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('14', 'FRI', '08:00', '900', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('14', 'SAT', '09:00', '840', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('14', 'SUN', '09:00', '780', '22:00');

-- Quickway Japanese Hibachi
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('15', 'MON', '10:45', '645', '21:30');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('15', 'TUE', '10:45', '645', '21:30');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('15', 'WED', '10:45', '645', '21:30');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('15', 'THU', '10:45', '645', '21:30');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('15', 'FRI', '10:45', '645', '21:30');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('15', 'SAT', '10:45', '645', '21:30');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('15', 'SUN', '10:45', '645', '21:30');

-----------------------------------------------------------------------------------------------------------------------------------

-- The Boheme
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('16', 'MON', '07:00', '900', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('16', 'TUE', '07:00', '900', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('16', 'WED', '07:00', '900', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('16', 'THU', '07:00', '900', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('16', 'FRI', '07:00', '900', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('16', 'SAT', '07:00', '900', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('16', 'SUN', '07:00', '840', '21:00');

-- The Stubborn Mule
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('17', 'MON', '11:00', '660', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('17', 'TUE', '11:00', '660', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('17', 'WED', '11:00', '660', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('17', 'THU', '11:00', '660', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('17', 'FRI', '11:00', '720', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('17', 'SAT', '11:00', '720', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('17', 'SUN', '11:00', '600', '21:00');

-- The Greenery Creamery
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('18', 'MON', '12:00', '540', '21:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('18', 'TUE', '12:00', '540', '21:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('18', 'WED', '12:00', '540', '21:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('18', 'THU', '12:00', '540', '21:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('18', 'FRI', '12:00', '600', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('18', 'SAT', '12:00', '600', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('18', 'SUN', '12:00', '540', '21:00');

-- Bulgogi House Korean Restaurant
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('19', 'MON', '16:00', '360', '22:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('19', 'TUE', '11:30', '690', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('19', 'WED', '11:30', '690', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('19', 'THU', '11:30', '690', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('19', 'FRI', '11:30', '690', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('19', 'SAT', '11:30', '690', '23:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('19', 'SUN', '16:00', '360', '22:00');

-- Foxtail Coffee - SoDo North
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('20', 'MON', '06:00', '720', '18:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('20', 'TUE', '06:00', '720', '18:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('20', 'WED', '06:00', '720', '18:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('20', 'THU', '06:00', '720', '18:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('20', 'FRI', '06:00', '720', '18:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('20', 'SAT', '06:00', '720', '18:00');
INSERT INTO schedule(sr_id, s_day, s_open, s_working_time, s_close) VALUES ('20', 'SUN', '06:00', '720', '18:00');

-- after inserting all data into the table, reference resturant(resturant_id) as foreign key to table, 
-- as each resturant has an hours of operation for each day and there are multiple days
ALTER TABLE schedule ADD CONSTRAINT FK_sr_id FOREIGN KEY (sr_id) REFERENCES resturant(resturant_id);

COMMIT;