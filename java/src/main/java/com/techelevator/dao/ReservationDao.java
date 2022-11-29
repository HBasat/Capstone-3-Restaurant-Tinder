package com.techelevator.dao;

import java.util.List;

import com.techelevator.model.Reservation;

public interface ReservationDao {

    public Reservation getReservationId(int reservationId);

//    public Reservation getRandomId(String randomId);

    public boolean getRandomId(String randomId);

//    public Reservation getExpirationDateByRandomId(String expirationDate);

    public Reservation getExpirationDateByRandomId(String randomId);

    public Reservation postInviteeInfo(String reservationRandomId, String expirationDate);
}