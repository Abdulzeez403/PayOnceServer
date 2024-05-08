// wallet.dto.ts

import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Wallet {
  @Field()
  id: string;

  @Field()
  userId: string;

  @Field()
  balance: number;
}

@InputType()
export class CreateWalletInput {
  @Field()
  userId: string;

  @Field()
  balance: number;
}

@InputType()
export class UpdateWalletInput {
  @Field()
  _id: string;

  @Field({ nullable: true })
  balance: number;
}
