import { Cascade, EntitySchema } from "@mikro-orm/core";

import type { BaseModel } from "../models/index.js";
import { EPerson, PersonModel, ScopeModel } from "../models/index.js";

export const PersonEntity = new EntitySchema<PersonModel, BaseModel>({
  class: PersonModel,
  extends: 'BaseModel',
  discriminatorColumn: 'type',
  discriminatorValue: EPerson.Base,
  properties: {
    name: { type: String },
    scope: {
      cascade: [Cascade.REMOVE],
      entity: () => ScopeModel,
      mapToPk: true,
      owner: true,
      reference: 'm:1',
    },
    type: { enum: true, items: () => EPerson }
  }
});
