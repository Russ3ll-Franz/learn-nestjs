import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';

import { User } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }

  @Get('/user')
  public getUsers() {
    return this.appService.getUsers()
  }

  @Get('/user/:id')
  public getUser(@Param('id') id: number) {
    return this.appService.getUser(id)
  }

  @Post('/user')
  public addUser(@Body() data: User) {
    return this.appService.addUser(data)
  }

  @Put('/user/:id')
  public updateUser(@Param('id') id: number, @Body() data: User) {
    return this.appService.updateUser(id, data)
  }

  @Delete('/user/:id')
  public deleteUser(@Param('id') id: number) {
    return this.appService.deleteUser(id);
  }
}
