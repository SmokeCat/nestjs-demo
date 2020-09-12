import { Module } from '@nestjs/common';
import { WeaponService } from './weapon.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { WeaponResolver } from './weapon.resolver';

@Module({
  imports: [PrismaModule],
  providers: [WeaponService, WeaponResolver],
  exports: [WeaponService]
})
export class WeaponModule { }