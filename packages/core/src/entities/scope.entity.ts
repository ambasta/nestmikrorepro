import { EntitySchema } from "@mikro-orm/core";

import type { BaseModel } from "../models/index.js";
import { ScopeModel } from "../models/index.js";

export const ScopeEntity = new EntitySchema<ScopeModel, BaseModel>({
  class: ScopeModel,
  abstract: true,
  properties: {
    name: { type: String, unique: true },
  }
});
