import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { PaystackWebhookInput } from './paystack-webhook.schema';
import { WalletService } from '../wallet/wallet.service';

@Resolver()
export class PaystackWebhookResolver {
    constructor(private readonly walletService: WalletService) { }

    @Mutation(() => Boolean)
    async handleWebhook(@Args('payload') payload: PaystackWebhookInput): Promise<boolean> {
        console.log('Webhook received:', payload);

        // Example: Check the event type and handle accordingly
        const event = payload.event;
        // const userId = payload.data; // Assuming email or some unique identifier

        if (event === 'charge.success') {
            // Handle successful charge
            console.log('Charge succeeded:', payload);

            // Update user balance - amount can be obtained from payload
            // const amount = payload.data.amount / 100; // Convert from kobo to naira or your currency
            // const amount = payload.data;
            // await this.walletService.updateBalance(userId, amount);
        } else if (event === 'charge.failed') {
            // Handle failed charge
            console.log('Charge failed:', payload);

            // Handle failed charge logic if necessary
        } else {
            // Handle other event types or ignore
            console.log('Unhandled event type:', event);
        }

        return true; // Return true to acknowledge receipt of the webhook
    }
}
