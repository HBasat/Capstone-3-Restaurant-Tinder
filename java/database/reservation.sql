BEGIN TRANSACTION;

-- table holds all information that is sent to other users that are invited to see the reservation.
CREATE TABLE reservation (
    reservation_id serial,                              -- unique ID of every reservation in the db
    reservation_random_id varchar(100) NOT NULL,        -- unique code that only those who have the link can see
    reservation_expiration_date varchar(50) NOT NULL,   -- expiration date of the invitation link
    
    --reservation_list int NOT NULL,                      -- list of resturants for users to vote on. FK to a different table list_resturants. 
    --reservation_user_id varchar(50) NOT NULL,         -- the user who made the reservation link 

    CONSTRAINT PK_reservationID PRIMARY KEY (reservation_id)
);

-- foreign keys. uncomment this when users are implemented (may not actually be needed)
--ALTER TABLE reservation ADD CONSTRAINT FK_user_Id FOREIGN KEY(reservation_user_id) REFERENCES users(user_id);

COMMIT;

