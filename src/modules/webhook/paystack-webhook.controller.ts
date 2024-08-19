import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Controller('paystack-webhook')
export class PaystackWebhookController {

    private readonly graphqlEndpoint: string = 'http://localhost:3000/graphql';

    @Post()
    @HttpCode(HttpStatus.OK)
    async handleWebhook(@Body() body: any) {
        const query = `
          mutation HandleWebhook($payload: JSON!) {
            handleWebhook(payload: $payload) {
              status
            }
          }
        `;

        const variables = { payload: body };

        try {
            const response = await axios.post(this.graphqlEndpoint, {
                query,
                variables
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            return response.data;
        } catch (error) {
            console.error('Error processing webhook:', error);
            return { status: 'error' };
        }
    }
}
