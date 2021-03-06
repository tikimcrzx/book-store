import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<UserDto> {
    const user = await this._userService.get(id);
    return user;
  }

  @Get()
  async getAllUsers(): Promise<UserDto[]> {
    const users = await this._userService.getAll();
    return users;
  }

  @Post()
  async createUser(@Body() user: User): Promise<UserDto> {
    const createdUser = await this._userService.create(user);
    return createdUser;
  }

  @Patch(':id')
  async updateUser(@Param() id: string, @Body() user: User) {
    const updatedUser = await this._userService.update(id, user);
    return updatedUser;
  }

  @Delete(':id')
  async deleteUser(@Param() id: string) {
    await this._userService.delete(id);
    return true;
  }
}
