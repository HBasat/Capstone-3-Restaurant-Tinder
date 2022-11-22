package com.techelevator.dao;

import com.techelevator.model.ReservationList;

public interface ReservationListDao {

    public ReservationList getLike(int reservationListLike);

    public ReservationList getDislike(int reservationListDislike);

}