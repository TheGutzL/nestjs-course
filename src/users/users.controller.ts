import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiTags('users')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  @ApiTags('users')
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }
}
