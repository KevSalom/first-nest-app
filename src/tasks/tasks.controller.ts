import { Controller, Get } from '@nestjs/common';

@Controller({})
export class TasksController {

    @Get("/tasks")
    getTasks() {
        return [
            {
                id: 1,
                title: 'Task 1',
                description: 'Task 1 description',
                status: 'pending',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                title: 'Task 2',
                description: 'Task 2 description',
                status: 'pending',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 3,
                title: 'Task 3',
                description: 'Task 3 description',
                status: 'pending',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ];
    }
}