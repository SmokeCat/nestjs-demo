import { Resolver, Args, Query, Parent, ResolveField } from "@nestjs/graphql";
import { WeaponService } from "src/weapon/weapon.service";
import { UserService } from "./user.service";

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userSerivce: UserService,
    private readonly weaponService: WeaponService
  ) { }

  @Query('user')
  async getUser(@Args('id') id: number) {
    const user = await this.userSerivce.findById(id);
    return user;
  }

  @Query('count')
  async getCount() {
    return await this.userSerivce.getCount();
  }

  @ResolveField('weapon')
  async getWeapon(@Parent() user) {
    console.log(JSON.stringify(user));
    const weaponId = user.weapon_id;
    const weapon = await this.weaponService.findById(weaponId);
    return weapon;
  }
}