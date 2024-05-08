import { Field, InputType, ObjectType } from '@nestjs/graphql';
// import { Types } from 'mongoose';

// @ObjectType()
// class TransactionDate {
//   @Field()
//   date: Date;

//   @Field()
//   timezone_type: number;

//   @Field()
//   timezone: string;
// }

@ObjectType()
export class AirtimeResponse {
  //   @Field(() => String, { nullable: true })
  //   _id?: string;

  @Field()
  code: string;

  @Field()
  response_description: string;

  @Field()
  requestId: string;

  @Field()
  transactionId: string;

  @Field()
  amount: string;

  //   @Field(() => TransactionDate) // Using the custom scalar type for transaction_date
  //   transaction_date: TransactionDate;

  @Field()
  purchased_code: string;
}

@InputType()
export class AirtimeResponseInput {
  @Field()
  code: string;

  @Field()
  response_description: string;

  @Field()
  requestId: string;

  @Field()
  transactionId: string;

  @Field()
  amount: string;

  //   @Field(() => TransactionDate) // Using the custom scalar type for transaction_date
  //   transaction_date: TransactionDate;

  @Field()
  purchased_code: string;
}
