package com.techelevator.dao;

import com.techelevator.model.Schedule;

import java.util.List;

public interface ScheduleDao {

    public List <Schedule> getScheduleByRestId(int restaurantScheduleID);

    public List<Schedule> getScheduleByRestIds(List <Integer> restaurantScheduleIDs);

}
