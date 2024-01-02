import { Expose } from 'class-transformer';

export class OptionType {
  @Expose()
  value: string;

  @Expose()
  name: string;

  constructor(object?: Partial<OptionType>) {
    if (object) Object.assign(this, object);
  }
}

