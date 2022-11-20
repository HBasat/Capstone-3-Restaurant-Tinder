package com.techelevator.controller;

import com.techelevator.dao.ReservationDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PathVariable;
import com.techelevator.model.Reservation;


import java.util.List;

@CrossOrigin
@RequestMapping("/invite")
@RestController
public class ReservationController {

    @Autowired
    private ReservationDao reservationDao;

    public ReservationController(ReservationDao reservation){this.reservationDao = reservation;}

    @RequestMapping(path = "", method = RequestMethod.POST)
        public Reservation postInviteeInfo(@RequestParam ("reservation_expiration_date") String expirationDate, @RequestParam("reservation_random_id") String randomId) {
        return reservationDao.postInviteeInfo(randomId, expirationDate);
    }

}
