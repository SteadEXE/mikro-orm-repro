import { Entity, OneToMany, PrimaryKey } from "@mikro-orm/decorators/legacy";
import { OrderItem } from "@/entities/order-item.entity";
import { Collection } from "@mikro-orm/core";
import { randomUUID } from "node:crypto";

@Entity()
export class Order {
  @PrimaryKey({ name: "POSITIONS_NR", type: "string", onCreate: () => randomUUID() })
  id!: string;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItems = new Collection<OrderItem>(this);
}
