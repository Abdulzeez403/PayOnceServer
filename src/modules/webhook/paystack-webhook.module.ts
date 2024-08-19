import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PaystackWebhookResolver } from './paystack-webhook.resolver';
import { WalletModule } from '../wallet/wallet.module';


@Module({
    imports: [HttpModule, WalletModule],
    providers: [PaystackWebhookResolver],
    // controllers: [PaystackWebhookResolver],
})
export class PaystackWebhookModule { }
