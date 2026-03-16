import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './entities/user.entity';
import { MsSqlDriver } from '@mikro-orm/mssql';
import { ReflectMetadataProvider } from '@mikro-orm/decorators/legacy';

@Module({
  imports: [MikroOrmModule.forRoot({
    driver: MsSqlDriver,
    host: 'localhost',
    user: 'sa',
    password: 'Azerty!',
    dbName: 'mssql',
    entities: [User],
    metadataProvider: ReflectMetadataProvider,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
