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


//    @RequestMapping(path = "/random_id/{randomId}",method = RequestMethod.GET)
//    public Reservation verifyRandomId(@PathVariable String randomId) {
//        return reservationDao.getRandomId(randomId);
//    }

    @RequestMapping(path = "/random_id/{randomId}",method = RequestMethod.GET)
    @ResponseBody
    public Boolean isValid(@PathVariable String randomId) {
        return reservationDao.getRandomId(randomId);
    }

    @RequestMapping(path = "/expiration/{randomId}", method = RequestMethod.GET)
    public Reservation randomIdExpiration(@PathVariable String randomId) {
        return reservationDao.getExpirationDateByRandomId(randomId);
    }


    @RequestMapping(path = "", method = RequestMethod.POST)
    public Reservation postInviteeInfo(@RequestBody InviteeDTO dto) {
        return reservationDao.postInviteeInfo(dto.getReservation_random_id(), dto.getReservation_expiration_date());
    }
    public static class InviteeDTO{
        public String getReservation_expiration_date() {
            return reservation_expiration_date;
        }

        public void setReservation_expiration_date(String reservation_expiration_date) {
            this.reservation_expiration_date = reservation_expiration_date;
        }

        public String getReservation_random_id() {
            return reservation_random_id;
        }

        public void setReservation_random_id(String reservation_random_id) {
            this.reservation_random_id = reservation_random_id;
        }

        private String reservation_expiration_date;
        private String reservation_random_id;
    }
}
