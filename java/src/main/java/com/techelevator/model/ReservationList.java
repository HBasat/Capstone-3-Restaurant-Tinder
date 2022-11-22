package com.techelevator.model;

public class ReservationList {

    private int reservationId;

    private int reservationListLike;

    private int reservationListDislike;

    public int getReservationId() {
        return reservationId;
    }

    public void setReservationId(int reservationId) {
        this.reservationId = reservationId;
    }

    public int getReservationListLike() {
        return reservationListLike;
    }

    public void setReservationListLike(int reservationListLike) {
        this.reservationListLike = reservationListLike;
    }

    public int getReservationListDislike() {
        return reservationListDislike;
    }

    public void setReservationListDislike(int reservationListDislike) {
        this.reservationListDislike = reservationListDislike;
    }
}