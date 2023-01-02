import type { ObjectId } from '@mikro-orm/mongodb';

export abstract class BaseModel {
  _id!: ObjectId;
  id!: string;
  created: Date = new Date();
  updated: Date = new Date();
}
