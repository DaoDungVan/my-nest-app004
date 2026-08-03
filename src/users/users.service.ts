import { Injectable, NotFoundException } from '@nestjs/common';

export interface User{
    userId: number,
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {userId: 1, username: 'mario', password: 'abcd1234'},
        {userId: 2, username: 'luigi', password: 'abcd1234'},
    ];

    async findOne(username: string): Promise<User>  {
        const result = this.users.find(
            (user) => user.username === username
        );
        if (!result) {
            throw new NotFoundException(`User ${username} not found`);
        }
        return result;
    }
}
