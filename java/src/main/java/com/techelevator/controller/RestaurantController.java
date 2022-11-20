package com.techelevator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PathVariable;
import com.techelevator.model.Restaurant;
import com.techelevator.dao.RestaurantDao;

import java.util.List;

@CrossOrigin
@RequestMapping("/restaurant")
@RestController
public class RestaurantController {

    @Autowired
    private RestaurantDao restaurantDao;

    public RestaurantController(RestaurantDao restaurant){this.restaurantDao = restaurant;}

    @RequestMapping(method = RequestMethod.GET)
    public List<Restaurant> restaurants(){return restaurantDao.getAllRestaurant();}

    @RequestMapping(path = "/id/{resturant_id}", method = RequestMethod.GET)
    public Restaurant getRestaurantById(@PathVariable int id){
        return restaurantDao.getRestaurantById(id);
    }

    @RequestMapping(path = "/name/{resturant_name}", method = RequestMethod.GET)
    public Restaurant getRestaurantByName(@PathVariable String name){
    return restaurantDao.getRestaurantByName(name);
    }

    @CrossOrigin
    @RequestMapping(path = "/zipcode/{zipcode}", method = RequestMethod.GET)
    public List<Restaurant> getRestaurantByZip(@PathVariable("zipcode") String zip) { return restaurantDao.getRestaurantByZip(zip); }




}
