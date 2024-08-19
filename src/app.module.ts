import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { TransactionResponseModule } from './modules/airtime/airtime.module';
import { WalletModule } from './modules/wallet/wallet.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { PaystackModule } from './modules/payment/paystack.module';
import { PaystackWebhookModule } from './modules/webhook/paystack-webhook.module';

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://BlogUser:12345@cluster0.aulb9dq.mongodb.net/payonce?retryWrites=true&w=majority',
        ),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            sortSchema: true,
            playground: true,
        }),
        TransactionResponseModule,
        WalletModule,
        AuthModule,
        UserModule,
        PaystackModule,
        PaystackWebhookModule

    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
