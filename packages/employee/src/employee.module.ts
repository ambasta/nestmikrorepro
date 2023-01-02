import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { CoreModule, PersonEntity, ScopeEntity } from '@nestmikrorepro/core';

import { AdhocEntity, EmployeeEntity } from './entities/index.js';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mongo',
        dbName: 'test',
        entities: [
          ScopeEntity,
          PersonEntity,
          EmployeeEntity,
          AdhocEntity
        ],
        ensureIndexes: true,
        forceUtcTimezone: true,
      })
    }),
    CoreModule,
  ]
})
export class EmployeeModule { }
