package com.techelevator.dao;

import org.springframework.stereotype.Service;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.jdbc.core.JdbcTemplate;
import com.techelevator.model.Reservation;


@Service
public class JdbcReservationDao implements ReservationDao{

    private JdbcTemplate jdbcTemplate;

    public JdbcReservationDao(JdbcTemplate jdbcTemplate){this.jdbcTemplate = jdbcTemplate;}

    @Override
    public Reservation getReservationId(int reservationId) {
        Reservation reservation = null;
        String sql = "SELECT * FROM reservation WHERE " +
                "WHERE reservation_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, reservationId);

        while(results.next()){
            reservation = mapRowToReservation(results);
        }
        return reservation;
    }

//    @Override
//    public Reservation getRandomId(String randomId) {
//        Reservation reservation = null;
//        String sql = "SELECT * FROM reservation WHERE reservation_random_id = ?";
//        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, randomId);
//        while (results.next()){
//            reservation = mapRowToReservation(results);
//        }
//
//        return reservation;
//    }

    @Override
    public boolean getRandomId(String randomId) {
        Reservation reservation = null;
        String sql = "SELECT * FROM reservation WHERE reservation_random_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, randomId);
        if (results.next()){
            return true;
//            reservation = mapRowToReservation(results);
        }

        return false;
    }

//    @Override
//    public Reservation getExpirationDateByRandomId(String expirationDate) {
//        Reservation reservation = null;
//        String sql = "SELECT reservation_expiration_date FROM reservation WHERE reservation_random_id = ?";
//        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, expirationDate);
//        while (results.next()){
//            reservation = mapRowToReservation(results);
//        }
//
//        return reservation;
//    }

    @Override
    public Reservation getExpirationDateByRandomId(String randomId) {
        Reservation reservation = null;
        String sql = "SELECT * FROM reservation WHERE reservation_random_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, randomId);
        while (results.next()){
            reservation = mapRowToReservation(results);
        }

        return reservation;
    }

    @Override
    public Reservation postInviteeInfo(String reservationRandomId, String expirationDate) {
        Reservation reservation = null;
        String sql = "INSERT INTO reservation (reservation_random_id, reservation_expiration_date) VALUES (?, ?) RETURNING reservation_id";
        int reservationId = jdbcTemplate.queryForObject(sql, Integer.class, reservationRandomId, expirationDate);
        return reservation;
    }

//    String reservationRandomId, String expirationDate

    private Reservation mapRowToReservation(SqlRowSet rowSet){
        Reservation reservation = new Reservation();
        reservation.setReservationId(rowSet.getInt("reservation_id"));
        reservation.setRandomId(rowSet.getString("reservation_random_id"));
        reservation.setExpirationDate(rowSet.getString("reservation_expiration_date"));
        return reservation;
    }
}