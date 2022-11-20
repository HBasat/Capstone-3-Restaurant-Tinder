package com.techelevator.dao;

import com.techelevator.model.ReservationList;

public interface ReservationListDao {

    public ReservationList getLike(int like);

    public ReservationList getDislike(int dislike);
}