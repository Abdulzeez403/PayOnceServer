import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AirtimeResponse, AirtimeResponseSchema } from './airtime.schema';
import { AirtimeResponseResolver } from './airtime.resolver';
import { AirtimeResponseService } from './airtime.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AirtimeResponse.name, schema: AirtimeResponseSchema },
    ]),
  ],
  providers: [AirtimeResponseResolver, AirtimeResponseService],
})
export class TransactionResponseModule {}
