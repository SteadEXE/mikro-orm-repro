import { Collection } from '@mikro-orm/core';
import { Entity, OneToMany, PrimaryKey } from '@mikro-orm/decorators/legacy';
import { Group } from './group.entity';

@Entity()
export class User {
    @PrimaryKey()
    id!: number;

    @OneToMany(() => Group, (group) => group.user)
    groups = new Collection<Group>(this);
}