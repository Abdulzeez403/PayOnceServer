import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Wallet } from './wallet.schema';
import { WalletService } from './wallet.service';
import { CreateWalletInput, UpdateWalletInput } from './wallet.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Wallet)
export class WalletResolver {
    constructor(private readonly walletService: WalletService) { }

    @Query(() => [Wallet])
    async getAllWallets(): Promise<Wallet[]> {
        return this.walletService.findAll();
    }

    @Query(() => Wallet)
    async getWallet(@Args('id', { type: () => ID }) id: string): Promise<Wallet> {
        return this.walletService.findOneById(id);
    }

    @Mutation(() => Wallet)
    @UseGuards(JwtAuthGuard)
    async createWallet(@Args('input') input: CreateWalletInput): Promise<Wallet> {
        const walletData: Partial<Wallet> = {
            userId: input.userId,
            balance: input.balance,
        };
        return this.walletService.create(walletData as Wallet);
    }

    @Mutation(() => Wallet)
    @UseGuards(JwtAuthGuard)
    async updateWallet(@Args('input') input: UpdateWalletInput): Promise<Wallet> {
        const walletData: Partial<Wallet> = {
            userId: input._id,
            balance: input.amount,
        };
        return this.walletService.updateBalance(walletData as any);
    }

    @Mutation(() => Wallet)
    async deleteWallet(
        @Args('id', { type: () => ID }) id: string,
    ): Promise<Wallet> {
        return this.walletService.remove(id);
    }
}
