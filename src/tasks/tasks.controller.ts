import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    tasksService: TasksService;

    constructor(tasksService:TasksService) {
      this.tasksService = tasksService;
    }

    @Get()
    getTasks() {
        return this.tasksService.getTasks();
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