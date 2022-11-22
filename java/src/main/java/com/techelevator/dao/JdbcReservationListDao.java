package com.techelevator.dao;

import org.springframework.stereotype.Service;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.jdbc.core.JdbcTemplate;
import com.techelevator.model.ReservationList;


@Service
public class JdbcReservationListDao implements ReservationListDao{

    private JdbcTemplate jdbcTemplate;

    public JdbcReservationListDao(JdbcTemplate jdbcTemplate){this.jdbcTemplate = jdbcTemplate;}

    @Override
    public ReservationList getLike(int like) {
        ReservationList reservationList = null;
        String sql = "UPDATE reservations_list SET rl_up = ? WHERE rl_rid = ?";
        jdbcTemplate.update(sql, like);
        return reservationList;
    }

    @Override
    public ReservationList getDislike(int dislike) {
        ReservationList reservationList = null;
        String sql = "UPDATE reservations_list SET rl_down = ? WHERE rl_rid = ?";
        jdbcTemplate.update(sql, dislike);
        return reservationList;
    }

}