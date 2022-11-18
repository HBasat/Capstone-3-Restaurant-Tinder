package com.techelevator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PathVariable;
import com.techelevator.model.Schedule;
import com.techelevator.dao.ScheduleDao;

import java.util.List;

@CrossOrigin
@RequestMapping("/schedule")
@RestController
public class ScheduleController {

    @Autowired
    private ScheduleDao scheduleDao;

    public ScheduleController(ScheduleDao schedule){this.scheduleDao = schedule;}

    @RequestMapping(path = "/{sr_id}",method = RequestMethod.GET)
    public List<Schedule> getScheduleByRestId(@PathVariable("sr_id") int restId){return scheduleDao.getScheduleByRestId(restId);}

    @RequestMapping(path = "/byIds/{sr_id}",method = RequestMethod.GET)
    public List<Schedule> getScheduleByRestIds(@PathVariable("sr_id") List <Integer> restIds){return scheduleDao.getScheduleByRestIds(restIds);}
}

