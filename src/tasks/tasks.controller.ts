import { Controller, Delete, Get, Patch, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { TasksService } from './tasks.service';
import { request } from 'http';

@Controller('tasks')
export class TasksController {
    tasksService: TasksService;

    constructor(tasksService:TasksService) {
      this.tasksService = tasksService;
    }

    @Get()
    getTasks(@Res() response: Response, @Req() request: Request) {
         console.log(request.url);
         response.status(200).send(this.tasksService.getTasks());
         return 
    }

    @Post()
    createTask() {  
        return this.tasksService.createTask();
    }

    @Delete()
    deleteTask() {
        return this.tasksService.deleteTask();
    }

    @Put()
    updateTask() {
        return this.tasksService.updateTask();
    }

    @Patch()
    updateStatusTask() {
        return this.tasksService.updateStatusTask();
    }
}