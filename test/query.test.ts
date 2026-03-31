import { describe, expect, it, beforeAll } from "vitest";
import { MikroORM, MsSqlDriver } from "@mikro-orm/mssql";
import { ReflectMetadataProvider } from "@mikro-orm/decorators/legacy";
import { beforeEach } from "node:test";
import { Order } from "@/entities/order.entity.js";
import { OrderItem } from "@/entities/order-item.entity.js";

describe("getHello logic", () => {
  let orm: MikroORM;

  beforeAll(async () => {
    orm = new MikroORM({
      driver: MsSqlDriver,
      host: "localhost",
      user: "sa",
      password: "Azerty123!",
      dbName: "mssql",
      entities: [Order, OrderItem],
      metadataProvider: ReflectMetadataProvider,
      allowGlobalContext: true,
      debug: true,
    });
  });

  beforeEach(async () => {
    await orm.schema.refresh();
  });

  it("should execute the query", async () => {
    const order = new Order();

    orm.em.persist(order);

    const orderItem1 = new OrderItem();
    orderItem1.order = order;

    const orderItem2 = new OrderItem();
    orderItem2.order = order;

    orm.em.persist(orderItem1);
    orm.em.persist(orderItem2);

    await orm.em.flush();

    orderItem1.status = "nok";
    orderItem2.status = "ok";

    await orm.em.flush();

    expect(orderItem1.status).toBe("nok");
    expect(orderItem2.status).toBe("ok");
  });
});
