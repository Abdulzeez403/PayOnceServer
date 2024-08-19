import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class PaystackWebhookInput {
    @Field()
    event: string;

    @Field(() => String)
    data: string; // Adjust the type based on your actual data structure
}
