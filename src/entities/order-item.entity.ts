import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/decorators/legacy";
import type { Rel } from "@mikro-orm/core";
import { Order } from "@/entities/order.entity";
import { randomUUID } from "node:crypto";

@Entity()
export class OrderItem {
  @PrimaryKey({ name: "POSITIONS_NR", type: "string", onCreate: () => randomUUID() })
  id!: string;

  @ManyToOne(() => Order, {
    name: "ORDER_NR",
    type: "bigint",
    primary: true,
  })
  order!: Rel<Order>;

  @Property({ type: "string", nullable: true })
  status!: string;
}
