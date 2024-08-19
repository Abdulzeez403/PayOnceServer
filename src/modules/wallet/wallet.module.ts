import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletService } from './wallet.service';
import { WalletResolver } from './wallet.resolver';
// import { Wallet } from './wallet.dto';
import { Wallet, WalletSchema } from './wallet.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Wallet.name, schema: WalletSchema }]),
    ],
    providers: [WalletService, WalletResolver],
    exports: [WalletService],
})
export class WalletModule { }
