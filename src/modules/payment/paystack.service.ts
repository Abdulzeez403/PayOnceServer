import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class PaystackService {
    private readonly paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;

    constructor(private readonly httpService: HttpService) { }
    private get headers() {
        return {
            Authorization: `Bearer ${this.paystackSecretKey}`,
            'Content-Type': 'application/json',
        };
    }

    async createTransaction(amount: number, email: string): Promise<AxiosResponse<any>> {
        const url = 'https://api.paystack.co/transaction/initialize';
        const body = {
            amount,
            email,
            currency: 'NGN', // or 'USD' if you prefer
        };
        return this.httpService.post(url, body, { headers: this.headers }).toPromise();
    }

    async verifyTransaction(reference: string): Promise<AxiosResponse<any>> {
        const url = `https://api.paystack.co/transaction/verify/${reference}`;
        return this.httpService.get(url, { headers: this.headers }).toPromise();
    }
}
