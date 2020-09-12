import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { WeaponModule } from './weapon/weapon.module';
import { join } from 'path';

@Module({
  imports: [
    UserModule,
    WeaponModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      // path: '/graph'
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class'
      }
    })
  ],
})
export class AppModule { }
