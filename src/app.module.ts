import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './entities/user.entity';
import { MsSqlDriver } from '@mikro-orm/mssql';
import { ReflectMetadataProvider } from '@mikro-orm/decorators/legacy';
import { Group } from './entities/group.entity';

@Module({
  imports: [MikroOrmModule.forRoot({
    driver: MsSqlDriver,
    host: 'localhost',
    user: 'sa',
    password: 'Azerty!',
    dbName: 'mssql',
    entities: [User, Group],
    metadataProvider: ReflectMetadataProvider,
    debug: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
