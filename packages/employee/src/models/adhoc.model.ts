import { PersonModel } from '@nestmikrorepro/core';

export class AdhocModel extends PersonModel {
  hourlyWage!: number;
}
