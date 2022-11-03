package com.techelevator.dao;

import org.springframework.stereotype.Service;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
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


    private Reservation mapRowToReservation(SqlRowSet rowSet){
        Reservation reservation = new Reservation();
        reservation.setReservationId(rowSet.getInt("reservation_id"));
        return reservation;
    }
}
