BEGIN TRANSACTION;

-- table of all information regarding resturants REGARDLESS of potential user input. 
-- images 1200 x 600.

CREATE TABLE resturant(
    resturant_id serial,                                -- unique ID of every resturant in the db.
    resturant_name varchar(50) NOT NULL,                -- name of resturant
    r_type varchar(50),                                 -- type of resturant (american, asian, etc)
    r_address varchar(50) NOT NULL,                     -- street address
    r_city varchar(50) NOT NULL,                        -- city 
    r_state varchar(2) NOT NULL,                        -- state
    r_zipcode varchar(5) NOT NULL,                      -- zipcode
    r_telephone varchar(50),                            -- phone number (if any)
    r_website varchar(100),                             -- website (if any)
    r_rating varchar(3),                                -- rating (if any)
    r_image varchar(1000),                              -- image/thumbnail of resturant
    r_takeout boolean,                                  -- yes/no take out 
    r_delivery boolean,                                 -- yes/no delivery

    CONSTRAINT PK_rID PRIMARY KEY (resturant_id)        -- primary key is resturant_id
);

-- insert mock data
-- INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_website, r_rating, r_image, r_takeout, r_delivery) VALUES ('', '', '', '', '', '', '', '', '', '', , );

-- dallas
INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_website, r_rating, r_image, r_takeout, r_delivery) VALUES ('Shake Shack, Uptown Dallas', 'Fast Food', '2500 N Pearl St', 'Dallas', 'TX', '75201', '214-983-1023', 'https://shakeshack.com/#/', '4.3', 'https://i.imgur.com/Fj1NkZ8.png', true, true);
INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_website, r_rating, r_image, r_takeout, r_delivery) VALUES ('The Woolworth', 'American', '1520 Elm St #201', 'Dallas', 'TX', '75201', '214-814-0588','https://www.thewoolworthdallas.com', '4.5', 'https://i.imgur.com/hSnGoyM.png', true, false);
INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_website, r_rating, r_image, r_takeout, r_delivery) VALUES ('Yardbird Table & Bar', 'American', '2121 N Pearl St St 170', 'Dallas', 'TX', '75201', '469-208-2441', 'https://www.runchickenrun.com/dallas/', '4.2', 'https://i.imgur.com/lon32wg.png', true, true);
INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_website, r_rating, r_image, r_takeout, r_delivery) VALUES ('Meso Maya Comida y Copas', 'Mexican', '1611 McKinney Ave', 'Dallas', 'TX', '75202', '214-484-6555', 'https://www.mesomaya.com/', '4.2', 'https://i.imgur.com/tfWaKiB.png', true, false);
INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_website, r_rating, r_image, r_takeout, r_delivery) VALUES ('The Crab Station - Deep Ellum', 'Seafood', '2813 Commerce St', 'Dallas', 'TX', '75226', '469-941-4083', 'http://crab-station.com/', '4.1', 'https://i.imgur.com/WAuCf0v.png', true, true);

-- los angeles 
INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_website, r_rating, r_image, r_takeout, r_delivery) VALUES ('Perch', 'French', '448 S Hill St', 'Los Angeles,', 'CA', '90013', '213-802-1770', 'http://perchla.com/', '4.4', 'https://i.imgur.com/wJvw00Z.png', true, true);
INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_website, r_rating, r_image, r_takeout, r_delivery) VALUES ('Bestia', 'Italian', '2121 E 7th Pl', 'Los Angeles', 'CA', '90021', '213-514-5724', 'http://www.bestiala.com/', '4.6', 'https://i.imgur.com/OAj3zJR.png', true, false);
INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_website, r_rating, r_image, r_takeout, r_delivery) VALUES ('Majordomo', 'Asian', '1725 Naud St', 'Los Angeles', 'CA', '90012', '323-545-4880', 'http://www.majordomo.la/', '4.7', 'https://i.imgur.com/UYxFddr.png', true, true);
INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_website, r_rating, r_image, r_takeout, r_delivery) VALUES ('Tomato Pie Pizza Joint', 'Italian', '2457 Hyperion Ave', 'Los Angeles', 'CA', '91030', '323-661-6474', 'http://tomatopiepizzajoint.com/', '4.5', 'https://i.imgur.com/meY0B38.png', true, true);
INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_website, r_rating, r_image, r_takeout, r_delivery) VALUES ('The Silver Lake House', 'Asian', '1733 Silver Lake Blvd', 'Los Angeles', 'CA ', '90026', '323-660-6100', 'http://www.thesilverlakehouse.com/', '4.6', 'https://i.imgur.com/sEtsxJd.png', true, true);

-- washington dc
INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_website, r_rating, r_image, r_takeout, r_delivery) VALUES ('The Capital Grille', 'American', '601 Pennsylvania Ave. NW', 'Washington', 'DC', '20004', '202-737-6200', 'https://www.thecapitalgrille.com/locations/dc/washington/washington-dc/8003', '4.6', 'https://i.imgur.com/UryBVJY.png', true, false);
INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_website, r_rating, r_image, r_takeout, r_delivery) VALUES ('Fiola Mare', 'Italian', '3100 K St NW', 'Washington', 'DC', '20007', '202-350-4982', 'http://www.fiolamaredc.com/', '4.5', 'https://i.imgur.com/XsAf1o9.png', true, true);
INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_website, r_rating, r_image, r_takeout, r_delivery) VALUES ('Jaleo by José Andrés', 'Spanish', '480 7th St NW', 'Washington', 'DC', '20004', '202-628-7949', 'http://www.jaleo.com/dc', '4.4', 'https://i.imgur.com/yW9hpJD.png', true, true);
INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_website, r_rating, r_image, r_takeout, r_delivery) VALUES ('Busboys and Poets', 'American', '450 K St NW', 'Washington', 'DC', '20001', '202-789-2227', 'http://www.busboysandpoets.com/', '4.3', 'https://i.imgur.com/lc1Tfgo.png', true, true);
INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_website, r_rating, r_image, r_takeout, r_delivery) VALUES ('Quickway Japanese Hibachi', 'Asian', '81 H St NW', 'Washington', 'DC', '20001', '202-847-3550', 'http://www.quickwayhibachi.com/', '4.0', 'https://i.imgur.com/kaypCRw.png', true, true);

-- orlando
INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_website, r_rating, r_image, r_takeout, r_delivery) VALUES ('The Boheme', 'American', '325 S Orange Ave', 'Orlando', 'FL', '32801', '407-581-4700', 'https://www.theboheme.com', '4.4', 'https://i.imgur.com/uTir1oe.png', true, false);
INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_website, r_rating, r_image, r_takeout, r_delivery) VALUES ('The Stubborn Mule', 'American', '100 S Eola Dr Suite 103', 'Orlando', 'FL', '32801', '407-730-3400', 'https://www.thestubbornmuleorlando.com/', '4.4', 'https://i.imgur.com/WxHs50C.png', true, true);
INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_website, r_rating, r_image, r_delivery) VALUES ('The Greenery Creamery', 'Dessert', '420 E Church St Unit 112', 'Orlando', 'FL', '32801', '407-286-1084', 'http://www.thegreenerycreamery.com/', '4.8', 'https://i.imgur.com/srjf6Hp.png', true);
INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_rating, r_image, r_takeout, r_delivery) VALUES ('Bulgogi House Korean Restaurant', 'Asian', '705 W Colonial Dr', 'Orlando', 'FL', '32804', '407-317-4193', '4.4', 'https://i.imgur.com/q3nU3he.png', 'true', 'true');
INSERT INTO resturant(resturant_name, r_type, r_address, r_city, r_state, r_zipcode, r_telephone, r_website, r_rating, r_image, r_takeout, r_delivery) VALUES ('Foxtail Coffee - SoDo North', 'Cafe', '1101 S Orange Ave', 'Orlando', 'FL', '32806', '407-930-1328', 'https://www.foxtailcoffee.com/sodo-north', '4.4', 'https://i.imgur.com/3NtnPlv.png', true, true);

COMMIT;