import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  Res
} from '@nestjs/common';
import { Request, Response } from 'express';
import { TasksService } from './tasks.service';
import { request } from 'http';
import { parse } from 'path';
import { CreateTasksDto } from './dto/create-tasks.dto';
import { UpdateTasksDto } from './dto/update-tasks.dto';
import { TicketPipe } from './pipe/ticket/ticket.pipe';

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

  @Get('/ticket')
  getPersonalTicket(@Query(TicketPipe) query : {name: string, num: number}) {
    return 'Your ticket is ' + (query.num + 3) + ' and your name is ' + query.name;
  }
  
  @Get('/ticket/:num')
  getTickets(@Param('num', ParseIntPipe) num: number) {
    return num + 23;
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
  @HttpCode(201)
  createTask(@Body() body: CreateTasksDto) {
    return this.tasksService.createTask(body);
  }

  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask();
  }

  @Put()
  updateTask(@Body() body: UpdateTasksDto) {
    return this.tasksService.updateTask(body);
  }

  @Patch()
  updateStatusTask() {
    return this.tasksService.updateStatusTask();
  }
}