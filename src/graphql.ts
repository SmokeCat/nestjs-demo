
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class User {
    id: number;
    name: string;
    age?: number;
    phone?: string;
    weapon?: Weapon;
}

export abstract class IQuery {
    abstract user(id: number): User | Promise<User>;

    abstract count(): number | Promise<number>;

    abstract weapon(id: number): Weapon | Promise<Weapon>;
}

export class Weapon {
    id: number;
    name: string;
    damage: number;
    weight: number;
    type: string;
}
