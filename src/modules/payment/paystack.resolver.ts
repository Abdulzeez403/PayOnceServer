import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { PaystackService } from './paystack.service';
import { AxiosResponse } from 'axios';
import { CreateDeposit, VerifyReference } from './paystack.schema';

@Resolver('Paystack')
export class PaystackResolver {
    constructor(private readonly paystackService: PaystackService) { }

    @Mutation(() => CreateDeposit)
    async createDeposit(
        @Args('amount') amount: number,
        @Args('email') email: string,
    ): Promise<any> {
        const response: AxiosResponse<any> = await this.paystackService.createTransaction(amount, email);
        return response.data;
    }

    @Mutation(() => VerifyReference)
    async verifyTransaction(@Args('reference') reference: string): Promise<any> {
        const response: AxiosResponse<any> = await this.paystackService.verifyTransaction(reference);
        return response.data;
    }
}
