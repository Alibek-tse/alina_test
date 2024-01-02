import { Expose, Transform, Type } from 'class-transformer';

export class MoneyType {
  @Expose()
  name: string;

  @Expose()
  buy: number;

  @Expose()
  sell: number;

  constructor(object?: Partial<MoneyType>) {
    if (object) Object.assign(this, object);
  }
}

