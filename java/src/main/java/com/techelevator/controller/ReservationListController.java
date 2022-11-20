package com.techelevator.controller;

import com.techelevator.dao.ReservationDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PathVariable;
import com.techelevator.model.ReservationList;
import com.techelevator.dao.ReservationListDao;


//@CrossOrigin
//@RequestMapping("/invite_list")
//@RestController
//public class ReservationListController {
//
//    private ReservationListDao reservationListDao;
//
//    public ReservationListController(ReservationListDao reservationList){this.reservationListDao = reservationList;}
//
//    @RequestMapping(method = RequestMethod.PUT)
//    public ReservationList updateLike (@RequestBody UpDTO dto){
//        return reservationListDao.getLike(dto.getRl_up());
//    }
//
//    @RequestMapping(method = RequestMethod.PUT)
//    public ReservationList updateDislike (@RequestBody DownDTO dto) {
//        return reservationListDao.getLike(dto.getRl_down());
//    }
//
//    public static class UpDTO{
//
//        private int rl_up;
//
//        public int getRl_up() {
//            return rl_up;
//        }
//
//        public void setRl_up(int rl_up) {
//            this.rl_up = rl_up;
//        }
//
//    }
//
//    public static class DownDTO{
//
//        private int rl_down;
//
//        public int getRl_down() {
//            return rl_down;
//        }
//
//        public void setRl_down(int rl_down) {
//            this.rl_down = rl_down;
//        }
//
//    }
//
//
//
//}
