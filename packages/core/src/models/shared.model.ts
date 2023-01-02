import { BaseModel } from "./base.model.js";
import type { ScopeModel } from "./scope.model.js";

export enum EPerson {
  Base,
  Employee,
  Adhoc,
}

export class PersonModel extends BaseModel {
  name!: string;
  scope!: ScopeModel;
  type!: EPerson;
}
