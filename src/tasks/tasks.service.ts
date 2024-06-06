import {Injectable} from '@nestjs/common'

export interface Tasks {
    id: number,
    title: string,
    description: string,
    status: string,
    createdAt: Date,
    updatedAt: Date
}   

@Injectable()
export class TasksService {

    getTasks():Tasks[] {
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
        ]
    }

    createTask() {
        return 'Creando una tarea'
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