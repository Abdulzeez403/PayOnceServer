import { Module } from '@nestjs/common';
import { PaystackService } from './paystack.service';
import { PaystackResolver } from './paystack.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    providers: [PaystackService, PaystackResolver],
})
export class PaystackModule { }
