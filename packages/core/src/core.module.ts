import { } from '@mikro-orm/core';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { PersonEntity, ScopeEntity } from './entities/index.js';


@Module({
  imports: [
    MikroOrmModule.forFeature([
      ScopeEntity,
      PersonEntity,
    ])
  ]
})
export class CoreModule {
}
