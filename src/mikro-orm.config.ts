import { MsSqlDriver } from "@mikro-orm/mssql";
import { ReflectMetadataProvider } from "@mikro-orm/decorators/legacy";
import { Order } from "@/entities/order.entity";
import { OrderItem } from "@/entities/order-item.entity";

export default () => ({
  driver: MsSqlDriver,
  host: "localhost",
  user: "sa",
  password: "Azerty123!",
  dbName: "mssql",
  entities: [Order, OrderItem],
  metadataProvider: ReflectMetadataProvider,
  debug: true,
});
