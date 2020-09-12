import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Weapon } from './interfaces/weapon.interface';

@Injectable()
export class WeaponService {
  constructor(private readonly prismaService: PrismaService){}

  async findById(id: number): Promise<Weapon> {
    const weapon = await this.prismaService.tbl_weapon.findOne({where: {id}});
    return weapon;
  }
}