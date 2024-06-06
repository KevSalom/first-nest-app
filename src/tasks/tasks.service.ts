import {Injectable, NotFoundException} from '@nestjs/common'

export interface Tasks {
    title: string;
    status: boolean;
    id: number;
}   

@Injectable()
export class TasksService {

    private tasks: Tasks[] = [
        {
            title: 'Task 1',
            status: true,
            id: 1

        },
        {
            title: 'Task 2',
            status: false,
            id: 2
        },
        {
            title: 'Task 3',
            status: true,
            id: 3
        }   
    ]

    getTasks():Tasks[] {
        return this.tasks
    }

    getTask(id:number) {
        const task = this.tasks.find(task => task.id === id)
        return task
    }

    createTask(task:any) {
        this.tasks.push({...task, id: this.tasks.length + 1})   
        return task
    }

    updateTask() {  
        return 'Actualizando una tarea'
    }

    deleteTask() {
        return 'Eliminando una tarea'
    }   

    updateStatusTask() {
        return 'Actualizando el estado de una tarea'
    }


}   