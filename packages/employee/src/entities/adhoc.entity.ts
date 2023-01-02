import { EntitySchema } from '@mikro-orm/core';
import type { PersonModel } from '@nestmikrorepro/core';
import { EPerson } from '@nestmikrorepro/core';

import { AdhocModel } from '../models/index.js';

export const AdhocEntity = new EntitySchema<AdhocModel, PersonModel>({
  class: AdhocModel,
  discriminatorValue: EPerson.Adhoc,
  extends: 'PersonModel',
  properties: {
    hourlyWage: { type: Number }
  },
});
