import { Controller, Get, Post, Param, Body } from '@nestjs/common'
import { UsersService } from './users.service'
import User from '../models/user/user'

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) { }

  @Get(':userId')
  async findUserById(@Param('userId') userId: string): Promise<User> {
    const user = await this.userService.findUserById(userId)
    return user
  }

  @Post
  create(@Body() body: Body): User {

  }
}
