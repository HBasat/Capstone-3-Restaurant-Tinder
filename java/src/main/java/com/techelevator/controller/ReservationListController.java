package com.techelevator.controller;

import com.techelevator.dao.ReservationDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PathVariable;
import com.techelevator.model.ReservationList;
import com.techelevator.dao.ReservationListDao;


@CrossOrigin
@RequestMapping("/invite_list")
@RestController
public class ReservationListController {

    private ReservationListDao reservationListDao;

    public ReservationListController(ReservationListDao reservationList){this.reservationListDao = reservationList;}

    @CrossOrigin
    @RequestMapping(path = "/like", method = RequestMethod.PUT)
    public ReservationList updateLike (@RequestBody UpDownDTO dto){
        return reservationListDao.getLike(dto.getVote());
    }

    @CrossOrigin
    @RequestMapping(path = "/dislike", method = RequestMethod.PUT)
    public ReservationList updateDislike (@RequestBody UpDownDTO dto) {
        return reservationListDao.getDislike(dto.getVote());
    }

    @RequestMapping(path = "/like", method = RequestMethod.POST)
    public ReservationList postLike (@RequestBody UpDownDTO dto) {
        return reservationListDao.getLike(dto.getVote());
    }

    @RequestMapping(path = "/dislike", method = RequestMethod.POST)
    public ReservationList postDislike (@RequestBody UpDownDTO dto) {
        return reservationListDao.getDislike(dto.getVote());
    }

    public static class UpDownDTO{

        public int getVote() {
            return vote;
        }

        public void setVote(int vote) {
            this.vote = vote;
        }

        private int vote;


    }



}
