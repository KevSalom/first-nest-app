import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Query,
  RawBody,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { TasksService } from './tasks.service';
import { request } from 'http';
import { parse } from 'path';

@Controller('tasks')
export class TasksController {
  tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  @Get()
  getTasks(@Res() response: Response, @Query() query: any) {
    console.log(query);
    response.status(200).send(this.tasksService.getTasks());
    return;
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    const task = this.tasksService.getTask(parseInt(id));
    if (!task) {
      return new NotFoundException(`Task with id ${id} not found`);
    }
    return task;
  }

  @Post()
  createTask(@Body() body: any) {
    console.log(body);
    return this.tasksService.createTask(body);
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
