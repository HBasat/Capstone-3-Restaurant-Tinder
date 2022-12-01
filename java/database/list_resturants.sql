BEGIN TRANSACTION;

-- table holds list of resturants to be voted on by users. 
CREATE TABLE reservations_list(
    rl_id serial,
    rl_rid int NOT NULL,            -- the ID of the resturant
    rl_resid int NOT NULL,          -- the ID of the reservation 
    rl_up int DEFAULT 0,            -- keeps track of thumbs up
    rl_down int DEFAULT 0,          -- keeps track of thumbs down 

    CONSTRAINT PK_rl_ID PRIMARY KEY (rl_id),                                                -- primary key is rl_id
    CONSTRAINT FK_rl_rID FOREIGN KEY (rl_rid) REFERENCES resturant(resturant_id),           -- foreign key is rl_rid and references ID of resturant from resturant table
    CONSTRAINT FK_rl_resID FOREIGN KEY (rl_resid) REFERENCES reservation(reservation_id)    -- foreign key is rl_resid and references ID of reservation from reservation table
);

COMMIT;