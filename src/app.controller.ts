import { Controller, Get } from '@nestjs/common';
import { EntityManager, serialize } from '@mikro-orm/mssql';
import { User } from './entities/user.entity';

@Controller()
export class AppController {
  constructor(private em: EntityManager) {}

  @Get()
  async getHello(): Promise<any> {
    const [users, count] = await this.em.getRepository(User).findAndCount({}, { populate: ['groups'] })

    return {
      count,
      users: serialize(users)
    }
  }
}
