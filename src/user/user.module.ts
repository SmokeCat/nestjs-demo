import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from '../prisma/prisma.module';
import { WeaponModule } from 'src/weapon/weapon.module';
import { UserResolver } from './user.resolver';

@Module({
  imports: [
    PrismaModule,
    WeaponModule,
  ],
  controllers: [UserController],
  providers: [UserService, UserResolver],
})
export class UserModule { }