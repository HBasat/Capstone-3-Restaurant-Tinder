package com.techelevator.model;

public class Restaurant {

    private int restaurantID;

    private String restaurantZip;

    private String restaurantName;

    public int getRestaurantID() {
        return restaurantID;
    }

    public void setRestaurantID(int restaurantID) {
        this.restaurantID = restaurantID;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public String getRestaurantZip() {
        return restaurantZip;
    }

    public void setRestaurantZip(String restaurantZip) {
        this.restaurantZip = restaurantZip;
    }
}
