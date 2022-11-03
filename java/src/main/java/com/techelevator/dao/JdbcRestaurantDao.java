package com.techelevator.dao;

import org.springframework.stereotype.Service;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.jdbc.core.JdbcTemplate;
import com.techelevator.model.Restaurant;
import java.util.List;
import java.util.ArrayList;

@Service
public class JdbcRestaurantDao implements RestaurantDao{

    private JdbcTemplate jdbcTemplate;

    public JdbcRestaurantDao(JdbcTemplate jdbcTemplate){this.jdbcTemplate = jdbcTemplate;}

    @Override
    public Restaurant getRestaurantById(int restaurantId) {
        Restaurant restaurant = null;
        String sql = "SELECT * FROM restaurant WHERE restaurant_id = ?;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, restaurantId);
        while(results.next()){
            restaurant = mapRowToRestaurant(results);
        }

        return restaurant;
    }

    @Override
    public List<Restaurant> getAllRestaurant() {
        List<Restaurant> restaurants = new ArrayList<>();
        String sql = "SELECT * FROM restaurant;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while(results.next()){
            Restaurant restaurant = mapRowToRestaurant(results);
            restaurants.add(restaurant);

        }
        return restaurants;
    }

    private Restaurant mapRowToRestaurant(SqlRowSet rowSet){
        Restaurant restaurant = new Restaurant();
        restaurant.setRestaurantID(rowSet.getInt("restaurant_id"));
        restaurant.setRestaurantName(rowSet.getString("restaurant_name"));
        return restaurant;
    }
}
