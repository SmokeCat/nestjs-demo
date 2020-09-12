import { Resolver, Args, Query, Parent, ResolveField } from "@nestjs/graphql";
import { WeaponService } from "src/weapon/weapon.service";

@Resolver('Weapon')
export class WeaponResolver {
  constructor(
    private readonly weaponService: WeaponService
  ) { }

  @Query('weapon')
  async getUser(@Args('id') id: number) {
    const user = await this.weaponService.findById(id);
    return user;
  }
}