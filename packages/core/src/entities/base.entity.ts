import { EntitySchema } from '@mikro-orm/core';

import type { BaseModel } from '../models/index.js';

export const BaseEntity = new EntitySchema<BaseModel>({
  name: 'BaseModel',
  abstract: true,
  properties: {
    _id: { type: 'ObjectId', primary: true },
    id: { type: String, serializedPrimaryKey: true },
    created: { type: Date },
    updated: { type: Date, onUpdate: () => new Date() },
  },
});
