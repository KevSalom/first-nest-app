import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 2,
            name: 'Jane Doe',
            email: 'jane.doe@example.com',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 3,
            name: 'Bob Smith',
            email: 'bob.smith@example.com',
            createdAt: new Date(),
            updatedAt: new Date()
        }            
    ];;

    getUsers() {
        return this.users;
    }
}
