import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('all')
  async findAll(): Promise<string> {
    const users = await this.userService.findAll();
    return JSON.stringify(users);
  }

  @Get(':id')
  async findById(@Param('id') id): Promise<string> {
    const user = await this.userService.findById(parseInt(id));
    return JSON.stringify(user);
  }

  @Post('add')
  async addOne(@Body() createUserDto: CreateUserDto): Promise<string> {
    console.log(`[user.contoller.addOne]param --- ${JSON.stringify(createUserDto)}`);
    const user = await this.userService.create(createUserDto);
    return JSON.stringify(user);
  }

  @Put('update')
  async updateById(@Body() updateUserDto: UpdateUserDto): Promise<string> {
    const user = await this.userService.updateById(updateUserDto);
    return JSON.stringify(user);
  }
}