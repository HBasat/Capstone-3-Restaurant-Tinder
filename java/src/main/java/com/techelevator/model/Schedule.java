package com.techelevator.model;

public class Schedule {

    // Variables
    private int scheduleID;
    private int restaurantScheduleID;
    private String scheduleDay;
    private String scheduleOpen;
    private String scheduleWorkingTime;

    // Getters
    public int getScheduleID() { return scheduleID; }
    public int getRestaurantScheduleID(){ return restaurantScheduleID; }
    public String getScheduleDay(){ return scheduleDay; }
    public String getScheduleOpen(){ return scheduleOpen; }
    public String getScheduleWorkingTime(){ return scheduleWorkingTime; }

    // Setters

    public void setScheduleID(int scheduleID){ this.scheduleID = scheduleID; }
    public void setRestaurantScheduleID(int restaurantScheduleID){ this.restaurantScheduleID = restaurantScheduleID; }
    public void setScheduleDay(String scheduleDay){ this.scheduleDay = scheduleDay; }
    public void setScheduleOpen(String scheduleOpen){ this.scheduleOpen = scheduleOpen; }
    public void setScheduleWorkingTime(String scheduleWorkingTime){ this.scheduleWorkingTime = scheduleWorkingTime; }

}
