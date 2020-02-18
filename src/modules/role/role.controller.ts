import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from './role.entity';

@Controller('roles')
export class RoleController {
  constructor(private readonly _roleService: RoleService) {}

  @Get(':id')
  async getRole(@Param('id') id: string): Promise<Role> {
    const role = await this._roleService.get(id);
    return role;
  }

  @Get()
  async getAllRoles(): Promise<Role[]> {
    const roles = await this._roleService.getAll();
    return roles;
  }

  @Post()
  async createRole(@Body() role: Role): Promise<Role> {
    const createdRole = await this._roleService.create(role);
    return createdRole;
  }

  @Patch(':id')
  async updateRole(@Param('id') id: string, @Body() role: Role) {
    const updatedRole = await this._roleService.update(id, role);
    return updatedRole;
  }

  @Delete(':id')
  async deleteRole(@Param('id') id: string) {
    await this._roleService.delete(id);
    return true;
  }
}
