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

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }

  @Get('/user')
  public getUsers() {
    return 'Get all users';
  }

  @Get('/user/:id')
  public getUser(@Param('id') id) {
    return 'Get user ' + id;
  }

  @Post('/user')
  public addUser(@Body() data) {
    return data;
  }

  @Put('/user/:id')
  public updateUser(@Param('id') id, @Body() data) {
    return 'Update user' + id;
  }

  @Delete('/user/:id')
  public deleteUser(@Param('id') id) {
    return 'Update user ' + id;
  }
}
