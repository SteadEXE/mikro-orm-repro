import { Entity, ManyToOne, PrimaryKey } from '@mikro-orm/decorators/legacy';
import { User } from './user.entity';
import type { Rel } from '@mikro-orm/core';

@Entity()
export class Group {
    @PrimaryKey()
    id!: number;

    @ManyToOne(() => User)
    user!: Rel<User>;
}