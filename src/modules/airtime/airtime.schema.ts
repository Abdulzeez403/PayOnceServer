import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class TransactionDate {
  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  timezone_type: number;

  @Prop({ required: true })
  timezone: string;
}

export const TransactionDateSchema =
  SchemaFactory.createForClass(TransactionDate);

@Schema()
export class AirtimeResponse {
  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  response_description: string;

  @Prop({ required: true })
  requestId: string;

  @Prop({ required: true })
  transactionId: string;

  @Prop({ required: true })
  amount: string;

  //   @Prop({ required: true, type: TransactionDateSchema })
  //   transaction_date: TransactionDate;

  @Prop({ required: true })
  purchased_code: string;
}

export const AirtimeResponseSchema =
  SchemaFactory.createForClass(AirtimeResponse);
