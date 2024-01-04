import { Expose } from 'class-transformer';

export class ApplicationFormType {
  @Expose()
  name: string = '';

  @Expose()
  amount: string = '';

  @Expose()
  applicationType: string = '';

  @Expose()
  isCall: string = 'Yes';

  @Expose()
  isSendLetter: boolean = false

  @Expose()
  isSendSms: boolean = false

  @Expose()
  applicantsNumber: number = 1;

  @Expose()
  additionalInfo: string = '';

  @Expose()
  city: string = '';

  @Expose()
  number: string = '';

  @Expose()
  date: Date | null = null;

  constructor(object?: Partial<ApplicationFormType>) {
    if (object) Object.assign(this, object);
  }
}
