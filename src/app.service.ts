import { Injectable } from '@nestjs/common';

export interface User {
  name: string
  email: string
}

@Injectable()
export class AppService {
  users: User[] = []

  root(): string {
    return 'Hello World!';
  }

  getUsers(): User[] {
    return this.users
  }

  getUser(id: number): User {
    return this.users[id]
  }

  addUser(user: User): User {
    this.users.push(user)
    return user
  }
  
  updateUser(id: number, user: User): User {
    this.users[id] = user
    return user
  }

  deleteUser(id: number): void {
    this.users.splice(id, 1)
  }
}
