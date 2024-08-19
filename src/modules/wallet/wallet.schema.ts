import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@ObjectType()
export class Wallet extends Document {
    @Field(() => ID)
    _id: string;

    @Field()
    @Prop({ required: true })
    userId: string;

    @Field()
    @Prop({ required: true })
    balance: number;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);
