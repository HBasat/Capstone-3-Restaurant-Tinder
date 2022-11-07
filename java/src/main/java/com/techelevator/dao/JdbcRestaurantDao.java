package com.techelevator.dao;

import com.techelevator.model.Restaurant;
import org.springframework.stereotype.Service;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
import java.util.ArrayList;

@Service
public class JdbcRestaurantDao implements RestaurantDao{

    private JdbcTemplate jdbcTemplate;

    public JdbcRestaurantDao(JdbcTemplate jdbcTemplate){this.jdbcTemplate = jdbcTemplate;}

    @Override
    public Restaurant getRestaurantById(int restaurantId) {
        Restaurant resturant = null;
        String sql = "SELECT * FROM resturant WHERE resturant_id = ?;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, restaurantId);
        while(results.next()){
            resturant = mapRowToRestaurant(results);
        }

        return resturant;
    }

    @Override
    public List<Restaurant> getAllRestaurant() {
        List<Restaurant> restaurants = new ArrayList<>();
        String sql = "SELECT * FROM resturant;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while(results.next()){
            Restaurant restaurant = mapRowToRestaurant(results);
            restaurants.add(restaurant);

        }
        return restaurants;
    }

    @Override
    public Restaurant getRestaurantByName(String restaurantName) {
        Restaurant restaurant = null;
        String sql = "SELECT * FROM resturant WHERE resturant_name = ?;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, restaurantName);
        while(results.next()){
            restaurant = mapRowToRestaurant(results);
        }
        return restaurant;
    }


    private Restaurant mapRowToRestaurant(SqlRowSet rowSet){
        Restaurant restaurant = new Restaurant();
        restaurant.setRestaurantID(rowSet.getInt("resturant_id"));
        restaurant.setRestaurantName(rowSet.getString("resturant_name"));
        return restaurant;
    }


}
