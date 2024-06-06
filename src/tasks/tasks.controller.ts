import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller({})
export class TasksController {
    tasksService: TasksService;

    constructor(tasksService:TasksService) {
      this.tasksService = tasksService;
    }

    @Get("/tasks")
    getTasks() {
        return this.tasksService.getTasks();
    }
}