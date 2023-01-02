import { EntitySchema } from '@mikro-orm/core';
import type { PersonModel } from '@nestmikrorepro/core';
import { EPerson } from '@nestmikrorepro/core';

import { EmployeeModel } from '../models/index.js';

export const EmployeeEntity = new EntitySchema<EmployeeModel, PersonModel>({
  class: EmployeeModel,
  discriminatorValue: EPerson.Employee,
  extends: 'PersonModel',
  properties: {
    salary: { type: Number }
  }
});
