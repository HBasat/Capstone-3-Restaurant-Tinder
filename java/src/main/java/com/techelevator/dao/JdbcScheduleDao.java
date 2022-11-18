package com.techelevator.dao;


import com.techelevator.model.Schedule;
import org.springframework.stereotype.Service;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class JdbcScheduleDao implements ScheduleDao {

    private JdbcTemplate jdbcTemplate;

    public JdbcScheduleDao(JdbcTemplate jdbcTemplate){this.jdbcTemplate = jdbcTemplate;}

    @Override
    public List<Schedule> getScheduleByRestId(int restaurantScheduleID) {
        List<Schedule> schedules = new ArrayList<>();
        String sql = "SELECT * FROM schedule WHERE sr_id = ?;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, restaurantScheduleID);
        while(results.next()){
            Schedule schedule = mapRowToSchedule(results);
            schedules.add(schedule);
        }

        return schedules;
    }

    @Override
    public List<Schedule> getScheduleByRestIds(List <Integer> restaurantScheduleIDs) {
        String inSql = String.join(",", Collections.nCopies(restaurantScheduleIDs.size(), "?"));

        List<Schedule> schedules = new ArrayList<>();
        String sql = String.format("SELECT * FROM schedule WHERE sr_id IN (%s);", inSql);
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, restaurantScheduleIDs.toArray());
        while(results.next()){
            Schedule schedule = mapRowToSchedule(results);
            schedules.add(schedule);
        }

        return schedules;
    }

    private Schedule mapRowToSchedule(SqlRowSet rowSet){
        Schedule schedule = new Schedule();
        schedule.setScheduleID(rowSet.getInt("s_id"));
        schedule.setRestaurantScheduleID(rowSet.getInt("sr_id"));
        schedule.setScheduleDay(rowSet.getString("s_day"));
        schedule.setScheduleOpen(rowSet.getString("s_open"));
        schedule.setScheduleWorkingTime(rowSet.getString("s_working_time"));
        return schedule;
    }

}
