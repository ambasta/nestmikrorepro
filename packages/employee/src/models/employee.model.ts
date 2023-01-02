import { PersonModel } from '@nestmikrorepro/core';

export class EmployeeModel extends PersonModel {
  salary!: number;
}
