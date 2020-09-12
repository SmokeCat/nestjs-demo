import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) { }

  async findAll(): Promise<User[]> {
    const users = await this.prismaService.tbl_user.findMany();

    console.log(`[user.service.findAll]users --- ${JSON.stringify(users)}`);
    return users;
  }

  async findById(id: number): Promise<User> {
    const user = await this.prismaService.tbl_user.findOne({
      where: { id }
    });

    console.log(`[user.service.findOne]user --- ${user}`);
    return user;
  }

  async create(user: CreateUserDto): Promise<User> {
    const res = await this.prismaService.tbl_user.create({
      data: {
        name: user.name,
        age: user.age,
        phone: user.phone
      }
    });
    return res;
  }

  async updateById(user: UpdateUserDto): Promise<User> {
    const res = await this.prismaService.tbl_user.update({
      data: {
        name: user.name,
        age: user.age,
        phone: user.phone
      },
      where: {
        id: user.id
      }
    });
    return res;
  }

  async getCount(): Promise<number> {
    const count = await this.prismaService.tbl_user.count();
    return count;
  }
}
