package com.techelevator.dao;

import com.techelevator.model.Restaurant;

import java.util.List;

public interface RestaurantDao {

    public List <Restaurant> getAllRestaurant();

    public Restaurant getRestaurantById(int restaurantId);

    public Restaurant getRestaurantByName(String restaurantName);

    public List <Restaurant> getRestaurantByZip(String restaurantZip);

}
