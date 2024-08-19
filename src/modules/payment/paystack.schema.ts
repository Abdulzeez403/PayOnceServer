import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Define the schema and GraphQL object type for `createDeposit`
@Schema()
@ObjectType()
export class CreateDeposit extends Document {
    @Field(() => ID)
    _id: string;

    @Field()
    @Prop({ required: true })
    email: string;

    @Field()
    @Prop({ required: true })
    amount: number;
}

export const CreateDepositSchema = SchemaFactory.createForClass(CreateDeposit);

// Define the schema and GraphQL object type for `veriyReference`
@Schema()
@ObjectType()
export class VerifyReference extends Document {
    @Field()
    @Prop({ required: true })
    reference: string;
}

export const VerifyReferenceSchema = SchemaFactory.createForClass(VerifyReference);
