package com.techelevator.model;

public class Restaurant {

    // Variables

    private int restaurantID;

    private String restaurantZip;

    private String restaurantName;

    private String restaurantAddress;

    private String restaurantCity;

    private String restaurantState;

    private String restaurantTeleNumber;

    private String restaurantImgUrl;

    private boolean restaurantTakeout;

    private boolean restaurantDelivery;

    //Getters

    public int getRestaurantID() {
        return restaurantID;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public String getRestaurantZip() {
        return restaurantZip;
    }

    public String getRestaurantAddress() {
        return restaurantAddress;
    }

    public String getRestaurantCity() {
        return restaurantCity;
    }

    public String getRestaurantState() {
        return restaurantState;
    }

    public String getRestaurantTeleNumber() {
        return restaurantTeleNumber;
    }

    public String getRestaurantImgUrl() {
        return restaurantImgUrl;
    }

    public boolean isRestaurantTakeout() {
        return restaurantTakeout;
    }

    public boolean isRestaurantDelivery() {
        return restaurantDelivery;
    }

    //setters

    public void setRestaurantID(int restaurantID) {
        this.restaurantID = restaurantID;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public void setRestaurantZip(String restaurantZip) {
        this.restaurantZip = restaurantZip;
    }

    public void setRestaurantAddress(String restaurantAddress) {
        this.restaurantAddress = restaurantAddress;
    }

    public void setRestaurantCity(String restaurantCity) {
        this.restaurantCity = restaurantCity;
    }

    public void setRestaurantState(String restaurantState) {
        this.restaurantState = restaurantState;
    }

    public void setRestaurantTeleNumber(String restaurantTeleNumber) {
        this.restaurantTeleNumber = restaurantTeleNumber;
    }

    public void setRestaurantImgUrl(String restaurantImgUrl) {
        this.restaurantImgUrl = restaurantImgUrl;
    }

    public void setRestaurantTakeout(boolean restaurantTakeout) {
        this.restaurantTakeout = restaurantTakeout;
    }

    public void setRestaurantDelivery(boolean restaurantDelivery) {
        this.restaurantDelivery = restaurantDelivery;
    }
}
